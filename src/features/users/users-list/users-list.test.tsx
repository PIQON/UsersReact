import { render } from "@testing-library/react";
import { UsersList } from "./users-list";
import { UsersContext } from "./../users-context/users-context";

const usersMock = [
  { id: "1", username: "Max", age: 30 },
  { id: "2", username: "Kamil", age: 21 },
];

describe("UsersList", () => {
  it("should render empty list message if users is an empty array", () => {
    const { getByText } = render(<UsersList />, {
      wrapper: ({ children }) => (
        <UsersContext.Provider value={{ users: [], addUser: () => undefined }}>
          {children}
        </UsersContext.Provider>
      ),
    });

    expect(getByText("Users is empty list.")).toBeInTheDocument();
  });

  it("should render each user correctly", () => {
    const { getByText } = render(<UsersList />, {
      wrapper: ({ children }) => (
        <UsersContext.Provider
          value={{ users: usersMock, addUser: () => undefined }}
        >
          {children}
        </UsersContext.Provider>
      ),
    });

    usersMock.forEach((user) => {
      expect(getByText(user.username)).toBeInTheDocument();
    });
  });

  it("should render with a correct class", () => {
    const { container } = render(<UsersList />, {
      wrapper: ({ children }) => (
        <UsersContext.Provider
          value={{ users: usersMock, addUser: () => undefined }}
        >
          {children}
        </UsersContext.Provider>
      ),
    });

    expect(container.querySelector(".users")).toBeDefined();
  });
});
