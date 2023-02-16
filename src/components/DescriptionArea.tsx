const HELP_ITEMS = [
  {
    id: "help1",
    title: "Git?",
    text: "Git은 형상관리 시스템이고... (생략)",
  },
  {
    id: "help2",
    title: "GitHub?",
    text: "GitHub은 Git과 관련된 서비스(ex. 클라우드 레포)를 제공하는 서비스인데... (생략)",
  },
  {
    id: "help3",
    title: "GitHub Actions?",
    text: "GitHub Actions는 레포와 관련된 워크플로우와 프로세스를 자동화할 수 있도록 도와주는 CI/CD 서비스인데... (생략)",
  },
]

const HelpArea = () => {
  return (
    <section data-testid="description-area">
      {HELP_ITEMS.map((item) => (
        <div key={item.id}>
          <h1>title: {item.title}</h1>
          <h2>text: {item.text}</h2>
        </div>
      ))}
    </section>
  )
}

export default HelpArea
