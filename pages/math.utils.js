import React from "react";
// import { getProviders } from "next-auth/react";

export function sum(num1, num2) {
  return num1 + num2;
}

export function Dashboard() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export function Header() {
  return (
    <div
      data-testid="header"
      className="text-3xl font-serif text-stone-600 mt-5 ml-5"
    >
      FoodieBites
    </div>
  );
}

// export async function getServerSideProps() {
//   const providers = await getProviders();
//   return {
//     props: {
//       providers,
//     },
//   };
// }
