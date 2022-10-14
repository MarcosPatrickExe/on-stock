import { useNavigate } from 'react-router-dom'

export default function Cadastro() {
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
        className="mt-6 flex flex-col w-96 text-white text-left gap-8 text-2xl"
      >
        <h2 className="text-white font-semibold text-6xl mt-10 bg-purple py-8 text-center">
          Criar Conta
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
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Fulano123$"
            className=" h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <div>
          <label htmlFor="name" className="clear-both w-full">
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome e Sobrenome"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>
        <div>
          <label htmlFor="address" className="clear-both w-full">
            Endereço
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Rua X, 123"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>
        <div>
          <label htmlFor="phone" className="clear-both w-full">
            Telefone para Contato
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="85 987654321"
            className="clear-both  h-12 bg-transparent border-2 border-purple w-[100%] text-[1vw]  px-4 font-openSans font-semibold text-white"
          />
        </div>

        <button
          type="submit"
          className=" text-white text-[1vw] border-2 border-purple py-1 px-6 hover:bg-purple font-openSans font-semibold"
        >
          Fazer Cadastro
        </button>
        <a
          className="text-left text-sm hover:underlin -mt-4 "
          onClick={() => navigate('/login')}
        >
          Já tem uma conta? Fazer login
        </a>
      </form>
    </div>
  )
}
