import React from 'react';

export default function ListUserComponent({ users }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold">User List</h3>
      <ul className="mt-4">
        {users.map((user, index) => (
          <li key={index} className="border-b py-2">
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Company:</strong> {user.company}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phoneNumber}</p>
            <p><strong>Message:</strong> {user.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
