import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, expect, test, vi } from "vitest";
import DashboardUsingRedux from "./DashboardUsingRedux";
import userReducer from "../store/users/userSlice";

vi.mock("./Users", () => {
  return {
    default: ({ name, onDelete: handleDelete, id }) => (
      <div>
        <span>{name}</span>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    ),
  };
});

vi.mock("axios", () => {
  return {
    default: { delete: vi.fn(() => Promise.resolve({})) },
  };
});

function renderWithStore(ui) {
  const store = configureStore({
    reducer: { users: userReducer },
    preloadedState: {
      users: {
        users: [{ id: 1, name: "Raj" }],
        loading: false,
        error: null,
      },
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
}

describe("DashboardUsingRedux", () => {
  test("renders users from redux store", () => {
    renderWithStore(<DashboardUsingRedux />);
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Raj")).toBeInTheDocument();
  });

  test("deletes user from redux store", async () => {
    renderWithStore(<DashboardUsingRedux />);
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
    await waitFor(() => {
      expect(screen.queryByText("Raj")).not.toBeInTheDocument();
    });
  });
});
