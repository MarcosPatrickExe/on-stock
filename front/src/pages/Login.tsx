import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center text-center ">
      <a
        className="text-5xl text-white font-bold whitespace-nowrap bg-purple py-4 w-full "
        onClick={() => navigate('/')}
      >
        ON STOCK
      </a>

      <form
        action="#"
        method="post"
        className="mt-6 flex flex-col w-96  text-white text-left gap-8 text-2xl "
      >
        <h2 className="text-white font-semibold text-6xl mt-10 bg-purple py-8 text-center">
          Fazer Login
        </h2>
        <div>
          <label htmlFor="login" className="clear-both mr-10">
            Login
          </label>
          <input
            type="text"
            name="login"
            id="login"
            placeholder="Email ou Nickname"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <div>
          <label htmlFor="password" className="mr-10">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Fulano123$"
            className=" h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <button
          type="submit"
          className=" text-white text-[1vw] border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Login
        </button>
        <a
          className="text-left text-sm hover:underline -mt-4"
          onClick={() => navigate('/cadastro')}
        >
          Não tem uma conta? Criar conta
        </a>
      </form>
    </div>
  )
}
