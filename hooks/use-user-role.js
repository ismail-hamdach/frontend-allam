import { useState, useEffect } from 'react';

export function useUserRole() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Simulating an API call or retrieving from local storage
    const fetchUserRole = async () => {
      // Replace this with actual logic to get the user role
      const role = localStorage.getItem('userRole') || 'child';
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  const updateUserRole = (newRole) => {
    if (newRole === 'parent' || newRole === 'child') {
      setUserRole(newRole);
      localStorage.setItem('userRole', newRole);
    } else {
      console.error('Invalid role. Must be either "parent" or "child".');
    }
  };

  return { userRole, updateUserRole };
}