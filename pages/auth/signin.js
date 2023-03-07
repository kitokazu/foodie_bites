import { getProviders, signIn as SignIntoProvider} from "next-auth/react";

function signIn({ providers }) {
  return (
    <div>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 flex h-screen items-center justify-center">
      {Object.values(providers).map((provider) => (
        <div className="text-center space-y-2 flex flex-col" key={provider.name}>
            <button className="signIn">
                Create Account
            </button>
            <button className="signIn mt-10" onClick={() => SignIntoProvider(provider.id)}>
                Sign in with {provider.name}
            </button>
        </div>
      ))} 
      </div>
    </div>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn