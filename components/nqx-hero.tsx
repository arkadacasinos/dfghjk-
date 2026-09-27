export function NqxHero() {
  return (
    <section className="nqx-hero" aria-labelledby="h-hero">
      <p className="nqx-kicker">Один бренд, два алфавита</p>
      <h1 className="nqx-title" id="h-hero">
        La Casino открывается с телефона, пока чайник ещё шумит
      </h1>
      <p className="nqx-lead">
        Я зашёл на La Casino вчера около десяти вечера, с кухни, на обычном мобильном интернете. Страница не стала грузить меня каруселью: сверху имя, ниже вход в лобби, и сразу видно, куда смотреть. Если в поиске вы набирали La казино или Ля казино, это не два разных зала. Так пишут один бренд — латиницей, кириллицей, иногда ещё и с опечаткой, когда палец не переключил раскладку.
      </p>
      <p className="nqx-lead">
        Ниже собрано то, что я сам проверяю перед сессией: La Casino официальный сайт, запасной адрес, касса и то, как не перепутать знакомую вывеску с чужой. Удачи не обещаю.
      </p>
      <figure className="nqx-frame">
        <img
          className="nqx-shot"
          src="/images/felt-edge.jpg"
          alt="Латунная фишка стоит на зелёном сукне у окна"
          width={960}
          height={524}
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="nqx-cap">
          Сукно и фишка. На экране стол тише, чем в зале, но ставка от этого не становится игрушечной.
        </figcaption>
      </figure>
    </section>
  )
}
