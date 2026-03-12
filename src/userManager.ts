import { User } from "./types";

let users: User[] = [];

export function addUser(user: User): void {
  users.push(user);
}

export function findUser(name: string): User | undefined {
  return users.find(user => user.name === name);
}

export function deleteUser(name: string): void {
  users = users.filter(user => user.name !== name);
}

export function showUsers(): User[] {
  return users;
}