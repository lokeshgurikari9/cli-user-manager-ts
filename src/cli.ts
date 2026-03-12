import promptSync from "prompt-sync";
import { addUser, findUser, deleteUser, showUsers } from "./userManager";
import { User } from "./types";

const prompt = promptSync();

function showMenu() {
  while (true) {
    console.log("\n===== USER MANAGEMENT =====");
    console.log("1. Add User");
    console.log("2. Search User");
    console.log("3. Delete User");
    console.log("4. Show All Users");
    console.log("5. Exit");

    const choice = prompt("Enter choice: ");

    switch (choice) {
      case "1":
        const id = Number(prompt("Enter ID: "));
        const name = prompt("Enter Name: ");
        const email = prompt("Enter Email: ");

        const user: User = { id, name, email };
        addUser(user);
        console.log("User added!");
        break;

      case "2":
        const searchName = prompt("Enter name to search: ");
        const userFound = findUser(searchName);
        console.log(userFound ?? "User not found");
        break;

      case "3":
        const deleteName = prompt("Enter name to delete: ");
        deleteUser(deleteName);
        console.log("User deleted!");
        break;

      case "4":
        console.log(showUsers());
        break;

      case "5":
        console.log("Exiting...");
        process.exit();

      default:
        console.log("Invalid option");
    }
  }
}

showMenu();