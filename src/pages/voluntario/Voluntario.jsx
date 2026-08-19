import { useState } from 'react'
import s from './voluntario.module.scss'

const Voluntario = () => {
  const [enviado, setEnviado] = useState(false)

  const enviarInscricao = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setEnviado(true)
  }

  return (
    <main>
          <section className={s.sectionVoluntario}>
            <div className={s.voluntario}> 
            <h1>Seja Voluntário</h1>
            <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
            </div>
    
            <div className={s.boxCardsVoluntario}>
              <article>
                <h3>Impacto Direto</h3>
                <p>Sua dedicação salva vidas e transforma comunidades</p>
              </article>
              <article>
                <h3>Crescimento Pessoal</h3>
                <p>Desenvolva habilidades e cresça profissionalmente</p>
              </article>
              <article>
                <h3>Comunidade</h3>
                <p>Faça parte de uma rede de profissionais comprometidos</p>
              </article>              
            </div>
          </section>
    
          <section className={s.sectionInscricao}>
            <div className={s.inscricao}>
              <h2>Inscrição para Voluntários</h2>

              <form className={s.form} onSubmit={enviarInscricao}>
                <h3>Dados Pessoais</h3>

                <div className={s.formInscricao}>
                  <div className={s.campo}>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" name="nome" type="text" autoComplete="name" required />
                  </div>
                  <div className={s.campo}>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                </div>

                <div className={`${s.campo} ${s.telefone}`}>
                  <label htmlFor="telefone">Telefone</label>
                  <input id="telefone" name="telefone" type="tel" autoComplete="tel" required />
                </div>

                <div className={s.campo}>
                  <label htmlFor="mensagem">Mensagem adicional</label>
                  <textarea id="mensagem" name="mensagem" placeholder="Conte por que você quer ser voluntário" />
                </div>

                <p className={s.mensagem}>Entraremos em contato para mais informações.</p>

                {enviado ? (
                  <p className={s.sucesso} role="status">
                    Inscrição registrada nesta demonstração. Obrigada pelo interesse!
                  </p>
                ) : null}

                <button type="submit">Enviar Inscrição</button>
                
              </form>
            </div>
          </section>
    
          
        </main>
  )
}

export default Voluntario
