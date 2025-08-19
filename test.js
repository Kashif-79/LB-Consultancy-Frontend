const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "Admin",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "Createaa",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CreateF",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "Creates",
      },
    ],
  },
];

const newAarry = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.name,
      label: "Navlink",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "Nav",
      })),
    });
  }
  return acc;
}, []);
console.log(newAarry);

// const newAarry = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) =>
//       acc.push({
//         path: child.path,
//         element: child.element,
//       })
//     );
//   }
//   return acc;
// }, []);
// console.log(newAarry);
