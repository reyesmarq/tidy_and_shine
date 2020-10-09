import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  return (
    <>
      <Scrollspy
        className="scrollspy"
        items={['Home', 'aboutUs', 'services', 'reviews', 'aboutTeam']}
        currentClassName="isCurrent"
      >
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#aboutUs">About us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#aboutTeam">About our team</a>
        </li>
      </Scrollspy>
      <section className="hero is-medium __mainhero" id="home">
        <div className="hero-head">
          <nav className="navbar is-fixed-top" id="navbar">
            <div className="navbar-brand">
              <img src="/images/logo_hotizontal.svg" alt="Logo" />
              <span
                className=""
                data-target="navbarBurgerMenu"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div
              id="navbarBurgerMenu"
              className=""
            >
              <div className="navbar-end">
                <Scrollspy
                  className="navbar-item _items"
                  items={['Home', 'aboutUs', 'services', 'reviews', 'aboutTeam']}
                  currentClassName="is-active"
                >
                  <li>
                    <a href="#home" className="navbar-item">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#aboutUs" className="navbar-item">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="navbar-item">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#reviews" className="navbar-item">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#aboutTeam" className="navbar-item">
                      About our team
                    </a>
                  </li>
                </Scrollspy>
                <div className="navbar-item">
                  <button className="button is-link">
                    <span>BOOKING</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <h2 className="title is-1">The Best Cleaning Service in Texas</h2>
          <p className="is-size-5">
            Let <span className="is-italic">REAL</span> Professionals take care
            of your home's Cleanliness while you do whatever you like with your
            free time!
          </p>
          <button className="button is-large is-link is-size-2 mt-6">
            FREE ESTIMATE
          </button>
        </div>
      </section>
      <section id="Home">
        <h2>Home</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, rem
          hic. Blanditiis, dicta enim cum, sunt totam et aut veritatis ullam
          nihil vitae eligendi quisquam architecto? Deleniti cupiditate labore
          ut. Rerum dolore quasi minima impedit cum fuga accusamus pariatur
          dolores totam doloremque facere asperiores molestiae inventore, vel
          illo laudantium ratione, soluta exercitationem dignissimos aliquid
          culpa labore repudiandae. Sequi suscipit dignissimos repellendus
          architecto, voluptatibus fuga aliquid sapiente reprehenderit rerum
          quibusdam laboriosam est! Ipsam consectetur nemo quaerat enim, quod
          praesentium vitae facilis cum sequi nam maxime accusantium ipsum neque
          optio! Saepe, aspernatur! Iure, cupiditate. Sunt rem fuga minima id
          unde. Illum maxime itaque reiciendis voluptatibus, reprehenderit atque
          quisquam a. Autem minus magnam quidem, quam accusantium quis
          necessitatibus? Ullam ut error laborum inventore enim facere culpa
          magni repellat, vitae voluptatum aperiam, voluptate laudantium atque
          cumque suscipit quae odio dolore et eum a quas. Culpa modi, rerum ad
          cum ex assumenda blanditiis unde placeat, qui sed suscipit fugiat odit
          deleniti iusto nihil. Consectetur molestiae eum, sint magnam cum iure
          in odio laboriosam voluptates facilis, eaque eveniet voluptatibus
          quibusdam. Temporibus incidunt exercitationem in eum pariatur iste
          totam laborum provident accusamus natus. Earum architecto vel, maxime
          nam numquam itaque distinctio labore quas veniam aspernatur tempore
          aliquam blanditiis ipsam obcaecati quisquam doloribus. Ab assumenda,
          facere repellat dolore odio ut quaerat et, doloremque minus animi
          voluptatibus alias ullam natus consectetur maiores reprehenderit,
          molestias laboriosam debitis placeat fuga. Sunt veritatis esse
          aliquam, maiores laudantium tenetur ipsam odit rem adipisci
          perspiciatis repellendus deserunt nobis odio quisquam! Itaque ea
          pariatur quia eius minima iste, officia, quo laboriosam molestias
          voluptatem non soluta? Quibusdam animi iste fugiat natus possimus
          quisquam, ipsum perferendis? Rerum quibusdam dolor, recusandae ad
          reiciendis possimus eius quam, illum earum officia aspernatur quasi
          eum voluptas alias ullam veritatis magnam nemo suscipit? Autem veniam
          laborum facilis? Provident eius quam ratione accusantium odit
          voluptate maiores fugiat laudantium, illo repellat. Distinctio,
          repudiandae. Magnam eveniet quas pariatur tempora aspernatur
          consectetur amet laborum suscipit aut modi ad, ullam quasi alias,
          labore molestias asperiores illum iure reiciendis sunt ut earum
          inventore nobis cumque voluptate. Exercitationem, quas vel at sequi
          quae eum voluptate possimus quisquam assumenda cumque perspiciatis
          deserunt dolore quaerat eos impedit quidem iure mollitia, illo ipsam
          voluptatem corrupti laboriosam voluptates. Id quae quam exercitationem
          quasi, consequuntur cumque provident facilis vero perspiciatis
          repellendus itaque natus eligendi molestiae! Non itaque repudiandae
          accusantium ullam error iusto aliquam obcaecati dolorem officia
          deserunt. Facere soluta reprehenderit accusamus. Esse beatae quaerat
          ad, pariatur quidem quasi. Blanditiis praesentium autem aperiam ad
          suscipit et aspernatur ut mollitia, minima est dolorem odit
          consectetur nam quae, ratione ab neque quidem voluptatum vitae
          deleniti temporibus quibusdam quos quasi. Nihil optio mollitia
          voluptatum pariatur ratione. Nulla autem voluptas voluptatum excepturi
          magni ipsa totam illo, suscipit sunt doloribus possimus pariatur
          voluptatibus cupiditate quisquam eos dicta accusantium neque
          exercitationem id eaque, cum et. Sunt recusandae earum, veniam id
          delectus quas velit nam dolore, numquam, tempora rem quo similique
          error et quae. Nihil architecto, tenetur ab sit facilis delectus vero
          hic temporibus eveniet. Recusandae dicta fugit eligendi placeat
          exercitationem nam architecto quidem magnam quisquam beatae aliquam,
          commodi at officia, debitis corrupti obcaecati reiciendis! Voluptatem
          animi molestias fuga, nobis natus distinctio vel delectus quod,
          laboriosam dolor cum! Ipsa aspernatur modi, praesentium unde tempore,
          sit saepe optio quas placeat natus vitae aliquam beatae, ducimus ex.
          Eum beatae iure quis minima ea accusamus natus laboriosam nam
          laudantium alias non sit, provident placeat dolores cupiditate
          adipisci? Vel nihil expedita veritatis totam id distinctio quasi
          maxime accusantium voluptas ea, at unde non in earum harum vitae
          dolores voluptates quas aperiam eos! Doloremque quia ex at laudantium
          nihil ducimus repellat quae, quibusdam ipsam aliquid doloribus, modi
          vero quam aspernatur accusantium! Praesentium in nihil ipsam id?
          Cupiditate odit fugiat, necessitatibus esse voluptate quos pariatur
          excepturi blanditiis quis aut incidunt et ut, quo, accusantium ex.
          Eaque eius quos labore, in laudantium aliquam quod porro, nobis sequi
          distinctio maxime saepe atque fugit provident reprehenderit commodi
          dolorum ut sapiente placeat dolore. Earum modi a voluptatem
          consectetur reprehenderit eius velit repellendus consequatur! Eaque
          porro dolorum quia quod, officia error veritatis earum corrupti
          quisquam dolorem sint a. Minus nemo molestias sint accusamus nesciunt
          impedit illo quidem ut suscipit, ex, amet provident, similique fugit
          corporis reprehenderit aperiam repellat! Similique nostrum,
          consequatur magni quasi beatae officia eaque necessitatibus sequi,
          architecto, quod repellendus! Laudantium perspiciatis aspernatur quae
          eveniet magnam ab necessitatibus mollitia, a architecto blanditiis
          ducimus? Pariatur natus nihil doloribus consequuntur qui. Eaque
          deserunt tempore atque aperiam. Dolore tempora harum at error
          quibusdam, repellat natus itaque culpa porro? Assumenda obcaecati
          officia placeat est repellendus incidunt quibusdam. Repellendus
          molestias iusto, animi, odio fuga alias, excepturi accusamus
          voluptates magni dolore quidem dolorum sint a. Distinctio cum impedit
          totam iste similique magni, blanditiis fugit consequatur tempora
          repellat ipsa officia unde debitis tenetur rerum. Voluptate illum odit
          velit earum. Numquam nemo enim pariatur perferendis recusandae,
          voluptatibus dicta doloremque neque. Rerum, repellat rem. Voluptates
          magni aspernatur possimus atque deleniti odit tempore. Quisquam
          corporis laborum ipsa fugiat officia deleniti recusandae maxime fugit
          debitis harum excepturi cum quod architecto consectetur commodi
          blanditiis alias magnam maiores, in earum dicta aut rerum velit.
          Facere vel aperiam deleniti, officia quam voluptatum harum illum
          nesciunt, provident omnis eius distinctio saepe exercitationem.
          Sapiente, assumenda inventore! Odit, hic laboriosam nisi blanditiis ab
          maxime tenetur qui corporis ea necessitatibus, quam animi repellat eos
          ullam temporibus incidunt facilis minima molestias quod pariatur
          quisquam natus. Expedita dolorem ab beatae consectetur dolore unde
          architecto ut, eveniet maiores dolor impedit nisi eligendi
          necessitatibus neque saepe quibusdam adipisci culpa est quos odio. Vel
          nihil ratione veniam itaque necessitatibus, ipsum dolorum obcaecati
          nemo est unde non repudiandae soluta adipisci cupiditate distinctio
          ad? Consequatur vero magnam, odio vel consequuntur non adipisci animi
          quasi obcaecati laboriosam doloremque recusandae voluptatem
          perferendis quas explicabo fugit illo quos cupiditate fuga repudiandae
          dignissimos similique dolores! Eaque iste aliquam sint tempora magnam
          distinctio est et ducimus, laudantium laboriosam culpa accusamus,
          animi veniam! Praesentium laborum repellendus cum porro asperiores eos
          fugit provident accusamus optio nemo, nihil numquam ipsam ipsum
          reprehenderit earum, totam voluptate quisquam officia ullam minus
          nobis! Illum unde beatae corrupti laboriosam?
        </p>
      </section>
      <section id="aboutUs">
        <h2>aboutUs</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, rem
          hic. Blanditiis, dicta enim cum, sunt totam et aut veritatis ullam
          nihil vitae eligendi quisquam architecto? Deleniti cupiditate labore
          ut. Rerum dolore quasi minima impedit cum fuga accusamus pariatur
          dolores totam doloremque facere asperiores molestiae inventore, vel
          illo laudantium ratione, soluta exercitationem dignissimos aliquid
          culpa labore repudiandae. Sequi suscipit dignissimos repellendus
          architecto, voluptatibus fuga aliquid sapiente reprehenderit rerum
          quibusdam laboriosam est! Ipsam consectetur nemo quaerat enim, quod
          praesentium vitae facilis cum sequi nam maxime accusantium ipsum neque
          optio! Saepe, aspernatur! Iure, cupiditate. Sunt rem fuga minima id
          unde. Illum maxime itaque reiciendis voluptatibus, reprehenderit atque
          quisquam a. Autem minus magnam quidem, quam accusantium quis
          necessitatibus? Ullam ut error laborum inventore enim facere culpa
          magni repellat, vitae voluptatum aperiam, voluptate laudantium atque
          cumque suscipit quae odio dolore et eum a quas. Culpa modi, rerum ad
          cum ex assumenda blanditiis unde placeat, qui sed suscipit fugiat odit
          deleniti iusto nihil. Consectetur molestiae eum, sint magnam cum iure
          in odio laboriosam voluptates facilis, eaque eveniet voluptatibus
          quibusdam. Temporibus incidunt exercitationem in eum pariatur iste
          totam laborum provident accusamus natus. Earum architecto vel, maxime
          nam numquam itaque distinctio labore quas veniam aspernatur tempore
          aliquam blanditiis ipsam obcaecati quisquam doloribus. Ab assumenda,
          facere repellat dolore odio ut quaerat et, doloremque minus animi
          voluptatibus alias ullam natus consectetur maiores reprehenderit,
          molestias laboriosam debitis placeat fuga. Sunt veritatis esse
          aliquam, maiores laudantium tenetur ipsam odit rem adipisci
          perspiciatis repellendus deserunt nobis odio quisquam! Itaque ea
          pariatur quia eius minima iste, officia, quo laboriosam molestias
          voluptatem non soluta? Quibusdam animi iste fugiat natus possimus
          quisquam, ipsum perferendis? Rerum quibusdam dolor, recusandae ad
          reiciendis possimus eius quam, illum earum officia aspernatur quasi
          eum voluptas alias ullam veritatis magnam nemo suscipit? Autem veniam
          laborum facilis? Provident eius quam ratione accusantium odit
          voluptate maiores fugiat laudantium, illo repellat. Distinctio,
          repudiandae. Magnam eveniet quas pariatur tempora aspernatur
          consectetur amet laborum suscipit aut modi ad, ullam quasi alias,
          labore molestias asperiores illum iure reiciendis sunt ut earum
          inventore nobis cumque voluptate. Exercitationem, quas vel at sequi
          quae eum voluptate possimus quisquam assumenda cumque perspiciatis
          deserunt dolore quaerat eos impedit quidem iure mollitia, illo ipsam
          voluptatem corrupti laboriosam voluptates. Id quae quam exercitationem
          quasi, consequuntur cumque provident facilis vero perspiciatis
          repellendus itaque natus eligendi molestiae! Non itaque repudiandae
          accusantium ullam error iusto aliquam obcaecati dolorem officia
          deserunt. Facere soluta reprehenderit accusamus. Esse beatae quaerat
          ad, pariatur quidem quasi. Blanditiis praesentium autem aperiam ad
          suscipit et aspernatur ut mollitia, minima est dolorem odit
          consectetur nam quae, ratione ab neque quidem voluptatum vitae
          deleniti temporibus quibusdam quos quasi. Nihil optio mollitia
          voluptatum pariatur ratione. Nulla autem voluptas voluptatum excepturi
          magni ipsa totam illo, suscipit sunt doloribus possimus pariatur
          voluptatibus cupiditate quisquam eos dicta accusantium neque
          exercitationem id eaque, cum et. Sunt recusandae earum, veniam id
          delectus quas velit nam dolore, numquam, tempora rem quo similique
          error et quae. Nihil architecto, tenetur ab sit facilis delectus vero
          hic temporibus eveniet. Recusandae dicta fugit eligendi placeat
          exercitationem nam architecto quidem magnam quisquam beatae aliquam,
          commodi at officia, debitis corrupti obcaecati reiciendis! Voluptatem
          animi molestias fuga, nobis natus distinctio vel delectus quod,
          laboriosam dolor cum! Ipsa aspernatur modi, praesentium unde tempore,
          sit saepe optio quas placeat natus vitae aliquam beatae, ducimus ex.
          Eum beatae iure quis minima ea accusamus natus laboriosam nam
          laudantium alias non sit, provident placeat dolores cupiditate
          adipisci? Vel nihil expedita veritatis totam id distinctio quasi
          maxime accusantium voluptas ea, at unde non in earum harum vitae
          dolores voluptates quas aperiam eos! Doloremque quia ex at laudantium
          nihil ducimus repellat quae, quibusdam ipsam aliquid doloribus, modi
          vero quam aspernatur accusantium! Praesentium in nihil ipsam id?
          Cupiditate odit fugiat, necessitatibus esse voluptate quos pariatur
          excepturi blanditiis quis aut incidunt et ut, quo, accusantium ex.
          Eaque eius quos labore, in laudantium aliquam quod porro, nobis sequi
          distinctio maxime saepe atque fugit provident reprehenderit commodi
          dolorum ut sapiente placeat dolore. Earum modi a voluptatem
          consectetur reprehenderit eius velit repellendus consequatur! Eaque
          porro dolorum quia quod, officia error veritatis earum corrupti
          quisquam dolorem sint a. Minus nemo molestias sint accusamus nesciunt
          impedit illo quidem ut suscipit, ex, amet provident, similique fugit
          corporis reprehenderit aperiam repellat! Similique nostrum,
          consequatur magni quasi beatae officia eaque necessitatibus sequi,
          architecto, quod repellendus! Laudantium perspiciatis aspernatur quae
          eveniet magnam ab necessitatibus mollitia, a architecto blanditiis
          ducimus? Pariatur natus nihil doloribus consequuntur qui. Eaque
          deserunt tempore atque aperiam. Dolore tempora harum at error
          quibusdam, repellat natus itaque culpa porro? Assumenda obcaecati
          officia placeat est repellendus incidunt quibusdam. Repellendus
          molestias iusto, animi, odio fuga alias, excepturi accusamus
          voluptates magni dolore quidem dolorum sint a. Distinctio cum impedit
          totam iste similique magni, blanditiis fugit consequatur tempora
          repellat ipsa officia unde debitis tenetur rerum. Voluptate illum odit
          velit earum. Numquam nemo enim pariatur perferendis recusandae,
          voluptatibus dicta doloremque neque. Rerum, repellat rem. Voluptates
          magni aspernatur possimus atque deleniti odit tempore. Quisquam
          corporis laborum ipsa fugiat officia deleniti recusandae maxime fugit
          debitis harum excepturi cum quod architecto consectetur commodi
          blanditiis alias magnam maiores, in earum dicta aut rerum velit.
          Facere vel aperiam deleniti, officia quam voluptatum harum illum
          nesciunt, provident omnis eius distinctio saepe exercitationem.
          Sapiente, assumenda inventore! Odit, hic laboriosam nisi blanditiis ab
          maxime tenetur qui corporis ea necessitatibus, quam animi repellat eos
          ullam temporibus incidunt facilis minima molestias quod pariatur
          quisquam natus. Expedita dolorem ab beatae consectetur dolore unde
          architecto ut, eveniet maiores dolor impedit nisi eligendi
          necessitatibus neque saepe quibusdam adipisci culpa est quos odio. Vel
          nihil ratione veniam itaque necessitatibus, ipsum dolorum obcaecati
          nemo est unde non repudiandae soluta adipisci cupiditate distinctio
          ad? Consequatur vero magnam, odio vel consequuntur non adipisci animi
          quasi obcaecati laboriosam doloremque recusandae voluptatem
          perferendis quas explicabo fugit illo quos cupiditate fuga repudiandae
          dignissimos similique dolores! Eaque iste aliquam sint tempora magnam
          distinctio est et ducimus, laudantium laboriosam culpa accusamus,
          animi veniam! Praesentium laborum repellendus cum porro asperiores eos
          fugit provident accusamus optio nemo, nihil numquam ipsam ipsum
          reprehenderit earum, totam voluptate quisquam officia ullam minus
          nobis! Illum unde beatae corrupti laboriosam?
        </p>
      </section>
      <section id="services">
        <h2>services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, rem
          hic. Blanditiis, dicta enim cum, sunt totam et aut veritatis ullam
          nihil vitae eligendi quisquam architecto? Deleniti cupiditate labore
          ut. Rerum dolore quasi minima impedit cum fuga accusamus pariatur
          dolores totam doloremque facere asperiores molestiae inventore, vel
          illo laudantium ratione, soluta exercitationem dignissimos aliquid
          culpa labore repudiandae. Sequi suscipit dignissimos repellendus
          architecto, voluptatibus fuga aliquid sapiente reprehenderit rerum
          quibusdam laboriosam est! Ipsam consectetur nemo quaerat enim, quod
          praesentium vitae facilis cum sequi nam maxime accusantium ipsum neque
          optio! Saepe, aspernatur! Iure, cupiditate. Sunt rem fuga minima id
          unde. Illum maxime itaque reiciendis voluptatibus, reprehenderit atque
          quisquam a. Autem minus magnam quidem, quam accusantium quis
          necessitatibus? Ullam ut error laborum inventore enim facere culpa
          magni repellat, vitae voluptatum aperiam, voluptate laudantium atque
          cumque suscipit quae odio dolore et eum a quas. Culpa modi, rerum ad
          cum ex assumenda blanditiis unde placeat, qui sed suscipit fugiat odit
          deleniti iusto nihil. Consectetur molestiae eum, sint magnam cum iure
          in odio laboriosam voluptates facilis, eaque eveniet voluptatibus
          quibusdam. Temporibus incidunt exercitationem in eum pariatur iste
          totam laborum provident accusamus natus. Earum architecto vel, maxime
          nam numquam itaque distinctio labore quas veniam aspernatur tempore
          aliquam blanditiis ipsam obcaecati quisquam doloribus. Ab assumenda,
          facere repellat dolore odio ut quaerat et, doloremque minus animi
          voluptatibus alias ullam natus consectetur maiores reprehenderit,
          molestias laboriosam debitis placeat fuga. Sunt veritatis esse
          aliquam, maiores laudantium tenetur ipsam odit rem adipisci
          perspiciatis repellendus deserunt nobis odio quisquam! Itaque ea
          pariatur quia eius minima iste, officia, quo laboriosam molestias
          voluptatem non soluta? Quibusdam animi iste fugiat natus possimus
          quisquam, ipsum perferendis? Rerum quibusdam dolor, recusandae ad
          reiciendis possimus eius quam, illum earum officia aspernatur quasi
          eum voluptas alias ullam veritatis magnam nemo suscipit? Autem veniam
          laborum facilis? Provident eius quam ratione accusantium odit
          voluptate maiores fugiat laudantium, illo repellat. Distinctio,
          repudiandae. Magnam eveniet quas pariatur tempora aspernatur
          consectetur amet laborum suscipit aut modi ad, ullam quasi alias,
          labore molestias asperiores illum iure reiciendis sunt ut earum
          inventore nobis cumque voluptate. Exercitationem, quas vel at sequi
          quae eum voluptate possimus quisquam assumenda cumque perspiciatis
          deserunt dolore quaerat eos impedit quidem iure mollitia, illo ipsam
          voluptatem corrupti laboriosam voluptates. Id quae quam exercitationem
          quasi, consequuntur cumque provident facilis vero perspiciatis
          repellendus itaque natus eligendi molestiae! Non itaque repudiandae
          accusantium ullam error iusto aliquam obcaecati dolorem officia
          deserunt. Facere soluta reprehenderit accusamus. Esse beatae quaerat
          ad, pariatur quidem quasi. Blanditiis praesentium autem aperiam ad
          suscipit et aspernatur ut mollitia, minima est dolorem odit
          consectetur nam quae, ratione ab neque quidem voluptatum vitae
          deleniti temporibus quibusdam quos quasi. Nihil optio mollitia
          voluptatum pariatur ratione. Nulla autem voluptas voluptatum excepturi
          magni ipsa totam illo, suscipit sunt doloribus possimus pariatur
          voluptatibus cupiditate quisquam eos dicta accusantium neque
          exercitationem id eaque, cum et. Sunt recusandae earum, veniam id
          delectus quas velit nam dolore, numquam, tempora rem quo similique
          error et quae. Nihil architecto, tenetur ab sit facilis delectus vero
          hic temporibus eveniet. Recusandae dicta fugit eligendi placeat
          exercitationem nam architecto quidem magnam quisquam beatae aliquam,
          commodi at officia, debitis corrupti obcaecati reiciendis! Voluptatem
          animi molestias fuga, nobis natus distinctio vel delectus quod,
          laboriosam dolor cum! Ipsa aspernatur modi, praesentium unde tempore,
          sit saepe optio quas placeat natus vitae aliquam beatae, ducimus ex.
          Eum beatae iure quis minima ea accusamus natus laboriosam nam
          laudantium alias non sit, provident placeat dolores cupiditate
          adipisci? Vel nihil expedita veritatis totam id distinctio quasi
          maxime accusantium voluptas ea, at unde non in earum harum vitae
          dolores voluptates quas aperiam eos! Doloremque quia ex at laudantium
          nihil ducimus repellat quae, quibusdam ipsam aliquid doloribus, modi
          vero quam aspernatur accusantium! Praesentium in nihil ipsam id?
          Cupiditate odit fugiat, necessitatibus esse voluptate quos pariatur
          excepturi blanditiis quis aut incidunt et ut, quo, accusantium ex.
          Eaque eius quos labore, in laudantium aliquam quod porro, nobis sequi
          distinctio maxime saepe atque fugit provident reprehenderit commodi
          dolorum ut sapiente placeat dolore. Earum modi a voluptatem
          consectetur reprehenderit eius velit repellendus consequatur! Eaque
          porro dolorum quia quod, officia error veritatis earum corrupti
          quisquam dolorem sint a. Minus nemo molestias sint accusamus nesciunt
          impedit illo quidem ut suscipit, ex, amet provident, similique fugit
          corporis reprehenderit aperiam repellat! Similique nostrum,
          consequatur magni quasi beatae officia eaque necessitatibus sequi,
          architecto, quod repellendus! Laudantium perspiciatis aspernatur quae
          eveniet magnam ab necessitatibus mollitia, a architecto blanditiis
          ducimus? Pariatur natus nihil doloribus consequuntur qui. Eaque
          deserunt tempore atque aperiam. Dolore tempora harum at error
          quibusdam, repellat natus itaque culpa porro? Assumenda obcaecati
          officia placeat est repellendus incidunt quibusdam. Repellendus
          molestias iusto, animi, odio fuga alias, excepturi accusamus
          voluptates magni dolore quidem dolorum sint a. Distinctio cum impedit
          totam iste similique magni, blanditiis fugit consequatur tempora
          repellat ipsa officia unde debitis tenetur rerum. Voluptate illum odit
          velit earum. Numquam nemo enim pariatur perferendis recusandae,
          voluptatibus dicta doloremque neque. Rerum, repellat rem. Voluptates
          magni aspernatur possimus atque deleniti odit tempore. Quisquam
          corporis laborum ipsa fugiat officia deleniti recusandae maxime fugit
          debitis harum excepturi cum quod architecto consectetur commodi
          blanditiis alias magnam maiores, in earum dicta aut rerum velit.
          Facere vel aperiam deleniti, officia quam voluptatum harum illum
          nesciunt, provident omnis eius distinctio saepe exercitationem.
          Sapiente, assumenda inventore! Odit, hic laboriosam nisi blanditiis ab
          maxime tenetur qui corporis ea necessitatibus, quam animi repellat eos
          ullam temporibus incidunt facilis minima molestias quod pariatur
          quisquam natus. Expedita dolorem ab beatae consectetur dolore unde
          architecto ut, eveniet maiores dolor impedit nisi eligendi
          necessitatibus neque saepe quibusdam adipisci culpa est quos odio. Vel
          nihil ratione veniam itaque necessitatibus, ipsum dolorum obcaecati
          nemo est unde non repudiandae soluta adipisci cupiditate distinctio
          ad? Consequatur vero magnam, odio vel consequuntur non adipisci animi
          quasi obcaecati laboriosam doloremque recusandae voluptatem
          perferendis quas explicabo fugit illo quos cupiditate fuga repudiandae
          dignissimos similique dolores! Eaque iste aliquam sint tempora magnam
          distinctio est et ducimus, laudantium laboriosam culpa accusamus,
          animi veniam! Praesentium laborum repellendus cum porro asperiores eos
          fugit provident accusamus optio nemo, nihil numquam ipsam ipsum
          reprehenderit earum, totam voluptate quisquam officia ullam minus
          nobis! Illum unde beatae corrupti laboriosam?
        </p>
      </section>
      <section id="reviews">
        <h2>reviews</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, rem
          hic. Blanditiis, dicta enim cum, sunt totam et aut veritatis ullam
          nihil vitae eligendi quisquam architecto? Deleniti cupiditate labore
          ut. Rerum dolore quasi minima impedit cum fuga accusamus pariatur
          dolores totam doloremque facere asperiores molestiae inventore, vel
          illo laudantium ratione, soluta exercitationem dignissimos aliquid
          culpa labore repudiandae. Sequi suscipit dignissimos repellendus
          architecto, voluptatibus fuga aliquid sapiente reprehenderit rerum
          quibusdam laboriosam est! Ipsam consectetur nemo quaerat enim, quod
          praesentium vitae facilis cum sequi nam maxime accusantium ipsum neque
          optio! Saepe, aspernatur! Iure, cupiditate. Sunt rem fuga minima id
          unde. Illum maxime itaque reiciendis voluptatibus, reprehenderit atque
          quisquam a. Autem minus magnam quidem, quam accusantium quis
          necessitatibus? Ullam ut error laborum inventore enim facere culpa
          magni repellat, vitae voluptatum aperiam, voluptate laudantium atque
          cumque suscipit quae odio dolore et eum a quas. Culpa modi, rerum ad
          cum ex assumenda blanditiis unde placeat, qui sed suscipit fugiat odit
          deleniti iusto nihil. Consectetur molestiae eum, sint magnam cum iure
          in odio laboriosam voluptates facilis, eaque eveniet voluptatibus
          quibusdam. Temporibus incidunt exercitationem in eum pariatur iste
          totam laborum provident accusamus natus. Earum architecto vel, maxime
          nam numquam itaque distinctio labore quas veniam aspernatur tempore
          aliquam blanditiis ipsam obcaecati quisquam doloribus. Ab assumenda,
          facere repellat dolore odio ut quaerat et, doloremque minus animi
          voluptatibus alias ullam natus consectetur maiores reprehenderit,
          molestias laboriosam debitis placeat fuga. Sunt veritatis esse
          aliquam, maiores laudantium tenetur ipsam odit rem adipisci
          perspiciatis repellendus deserunt nobis odio quisquam! Itaque ea
          pariatur quia eius minima iste, officia, quo laboriosam molestias
          voluptatem non soluta? Quibusdam animi iste fugiat natus possimus
          quisquam, ipsum perferendis? Rerum quibusdam dolor, recusandae ad
          reiciendis possimus eius quam, illum earum officia aspernatur quasi
          eum voluptas alias ullam veritatis magnam nemo suscipit? Autem veniam
          laborum facilis? Provident eius quam ratione accusantium odit
          voluptate maiores fugiat laudantium, illo repellat. Distinctio,
          repudiandae. Magnam eveniet quas pariatur tempora aspernatur
          consectetur amet laborum suscipit aut modi ad, ullam quasi alias,
          labore molestias asperiores illum iure reiciendis sunt ut earum
          inventore nobis cumque voluptate. Exercitationem, quas vel at sequi
          quae eum voluptate possimus quisquam assumenda cumque perspiciatis
          deserunt dolore quaerat eos impedit quidem iure mollitia, illo ipsam
          voluptatem corrupti laboriosam voluptates. Id quae quam exercitationem
          quasi, consequuntur cumque provident facilis vero perspiciatis
          repellendus itaque natus eligendi molestiae! Non itaque repudiandae
          accusantium ullam error iusto aliquam obcaecati dolorem officia
          deserunt. Facere soluta reprehenderit accusamus. Esse beatae quaerat
          ad, pariatur quidem quasi. Blanditiis praesentium autem aperiam ad
          suscipit et aspernatur ut mollitia, minima est dolorem odit
          consectetur nam quae, ratione ab neque quidem voluptatum vitae
          deleniti temporibus quibusdam quos quasi. Nihil optio mollitia
          voluptatum pariatur ratione. Nulla autem voluptas voluptatum excepturi
          magni ipsa totam illo, suscipit sunt doloribus possimus pariatur
          voluptatibus cupiditate quisquam eos dicta accusantium neque
          exercitationem id eaque, cum et. Sunt recusandae earum, veniam id
          delectus quas velit nam dolore, numquam, tempora rem quo similique
          error et quae. Nihil architecto, tenetur ab sit facilis delectus vero
          hic temporibus eveniet. Recusandae dicta fugit eligendi placeat
          exercitationem nam architecto quidem magnam quisquam beatae aliquam,
          commodi at officia, debitis corrupti obcaecati reiciendis! Voluptatem
          animi molestias fuga, nobis natus distinctio vel delectus quod,
          laboriosam dolor cum! Ipsa aspernatur modi, praesentium unde tempore,
          sit saepe optio quas placeat natus vitae aliquam beatae, ducimus ex.
          Eum beatae iure quis minima ea accusamus natus laboriosam nam
          laudantium alias non sit, provident placeat dolores cupiditate
          adipisci? Vel nihil expedita veritatis totam id distinctio quasi
          maxime accusantium voluptas ea, at unde non in earum harum vitae
          dolores voluptates quas aperiam eos! Doloremque quia ex at laudantium
          nihil ducimus repellat quae, quibusdam ipsam aliquid doloribus, modi
          vero quam aspernatur accusantium! Praesentium in nihil ipsam id?
          Cupiditate odit fugiat, necessitatibus esse voluptate quos pariatur
          excepturi blanditiis quis aut incidunt et ut, quo, accusantium ex.
          Eaque eius quos labore, in laudantium aliquam quod porro, nobis sequi
          distinctio maxime saepe atque fugit provident reprehenderit commodi
          dolorum ut sapiente placeat dolore. Earum modi a voluptatem
          consectetur reprehenderit eius velit repellendus consequatur! Eaque
          porro dolorum quia quod, officia error veritatis earum corrupti
          quisquam dolorem sint a. Minus nemo molestias sint accusamus nesciunt
          impedit illo quidem ut suscipit, ex, amet provident, similique fugit
          corporis reprehenderit aperiam repellat! Similique nostrum,
          consequatur magni quasi beatae officia eaque necessitatibus sequi,
          architecto, quod repellendus! Laudantium perspiciatis aspernatur quae
          eveniet magnam ab necessitatibus mollitia, a architecto blanditiis
          ducimus? Pariatur natus nihil doloribus consequuntur qui. Eaque
          deserunt tempore atque aperiam. Dolore tempora harum at error
          quibusdam, repellat natus itaque culpa porro? Assumenda obcaecati
          officia placeat est repellendus incidunt quibusdam. Repellendus
          molestias iusto, animi, odio fuga alias, excepturi accusamus
          voluptates magni dolore quidem dolorum sint a. Distinctio cum impedit
          totam iste similique magni, blanditiis fugit consequatur tempora
          repellat ipsa officia unde debitis tenetur rerum. Voluptate illum odit
          velit earum. Numquam nemo enim pariatur perferendis recusandae,
          voluptatibus dicta doloremque neque. Rerum, repellat rem. Voluptates
          magni aspernatur possimus atque deleniti odit tempore. Quisquam
          corporis laborum ipsa fugiat officia deleniti recusandae maxime fugit
          debitis harum excepturi cum quod architecto consectetur commodi
          blanditiis alias magnam maiores, in earum dicta aut rerum velit.
          Facere vel aperiam deleniti, officia quam voluptatum harum illum
          nesciunt, provident omnis eius distinctio saepe exercitationem.
          Sapiente, assumenda inventore! Odit, hic laboriosam nisi blanditiis ab
          maxime tenetur qui corporis ea necessitatibus, quam animi repellat eos
          ullam temporibus incidunt facilis minima molestias quod pariatur
          quisquam natus. Expedita dolorem ab beatae consectetur dolore unde
          architecto ut, eveniet maiores dolor impedit nisi eligendi
          necessitatibus neque saepe quibusdam adipisci culpa est quos odio. Vel
          nihil ratione veniam itaque necessitatibus, ipsum dolorum obcaecati
          nemo est unde non repudiandae soluta adipisci cupiditate distinctio
          ad? Consequatur vero magnam, odio vel consequuntur non adipisci animi
          quasi obcaecati laboriosam doloremque recusandae voluptatem
          perferendis quas explicabo fugit illo quos cupiditate fuga repudiandae
          dignissimos similique dolores! Eaque iste aliquam sint tempora magnam
          distinctio est et ducimus, laudantium laboriosam culpa accusamus,
          animi veniam! Praesentium laborum repellendus cum porro asperiores eos
          fugit provident accusamus optio nemo, nihil numquam ipsam ipsum
          reprehenderit earum, totam voluptate quisquam officia ullam minus
          nobis! Illum unde beatae corrupti laboriosam?
        </p>
      </section>
      <section id="aboutTeam">
        <h2>aboutTeam</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, rem
          hic. Blanditiis, dicta enim cum, sunt totam et aut veritatis ullam
          nihil vitae eligendi quisquam architecto? Deleniti cupiditate labore
          ut. Rerum dolore quasi minima impedit cum fuga accusamus pariatur
          dolores totam doloremque facere asperiores molestiae inventore, vel
          illo laudantium ratione, soluta exercitationem dignissimos aliquid
          culpa labore repudiandae. Sequi suscipit dignissimos repellendus
          architecto, voluptatibus fuga aliquid sapiente reprehenderit rerum
          quibusdam laboriosam est! Ipsam consectetur nemo quaerat enim, quod
          praesentium vitae facilis cum sequi nam maxime accusantium ipsum neque
          optio! Saepe, aspernatur! Iure, cupiditate. Sunt rem fuga minima id
          unde. Illum maxime itaque reiciendis voluptatibus, reprehenderit atque
          quisquam a. Autem minus magnam quidem, quam accusantium quis
          necessitatibus? Ullam ut error laborum inventore enim facere culpa
          magni repellat, vitae voluptatum aperiam, voluptate laudantium atque
          cumque suscipit quae odio dolore et eum a quas. Culpa modi, rerum ad
          cum ex assumenda blanditiis unde placeat, qui sed suscipit fugiat odit
          deleniti iusto nihil. Consectetur molestiae eum, sint magnam cum iure
          in odio laboriosam voluptates facilis, eaque eveniet voluptatibus
          quibusdam. Temporibus incidunt exercitationem in eum pariatur iste
          totam laborum provident accusamus natus. Earum architecto vel, maxime
          nam numquam itaque distinctio labore quas veniam aspernatur tempore
          aliquam blanditiis ipsam obcaecati quisquam doloribus. Ab assumenda,
          facere repellat dolore odio ut quaerat et, doloremque minus animi
          voluptatibus alias ullam natus consectetur maiores reprehenderit,
          molestias laboriosam debitis placeat fuga. Sunt veritatis esse
          aliquam, maiores laudantium tenetur ipsam odit rem adipisci
          perspiciatis repellendus deserunt nobis odio quisquam! Itaque ea
          pariatur quia eius minima iste, officia, quo laboriosam molestias
          voluptatem non soluta? Quibusdam animi iste fugiat natus possimus
          quisquam, ipsum perferendis? Rerum quibusdam dolor, recusandae ad
          reiciendis possimus eius quam, illum earum officia aspernatur quasi
          eum voluptas alias ullam veritatis magnam nemo suscipit? Autem veniam
          laborum facilis? Provident eius quam ratione accusantium odit
          voluptate maiores fugiat laudantium, illo repellat. Distinctio,
          repudiandae. Magnam eveniet quas pariatur tempora aspernatur
          consectetur amet laborum suscipit aut modi ad, ullam quasi alias,
          labore molestias asperiores illum iure reiciendis sunt ut earum
          inventore nobis cumque voluptate. Exercitationem, quas vel at sequi
          quae eum voluptate possimus quisquam assumenda cumque perspiciatis
          deserunt dolore quaerat eos impedit quidem iure mollitia, illo ipsam
          voluptatem corrupti laboriosam voluptates. Id quae quam exercitationem
          quasi, consequuntur cumque provident facilis vero perspiciatis
          repellendus itaque natus eligendi molestiae! Non itaque repudiandae
          accusantium ullam error iusto aliquam obcaecati dolorem officia
          deserunt. Facere soluta reprehenderit accusamus. Esse beatae quaerat
          ad, pariatur quidem quasi. Blanditiis praesentium autem aperiam ad
          suscipit et aspernatur ut mollitia, minima est dolorem odit
          consectetur nam quae, ratione ab neque quidem voluptatum vitae
          deleniti temporibus quibusdam quos quasi. Nihil optio mollitia
          voluptatum pariatur ratione. Nulla autem voluptas voluptatum excepturi
          magni ipsa totam illo, suscipit sunt doloribus possimus pariatur
          voluptatibus cupiditate quisquam eos dicta accusantium neque
          exercitationem id eaque, cum et. Sunt recusandae earum, veniam id
          delectus quas velit nam dolore, numquam, tempora rem quo similique
          error et quae. Nihil architecto, tenetur ab sit facilis delectus vero
          hic temporibus eveniet. Recusandae dicta fugit eligendi placeat
          exercitationem nam architecto quidem magnam quisquam beatae aliquam,
          commodi at officia, debitis corrupti obcaecati reiciendis! Voluptatem
          animi molestias fuga, nobis natus distinctio vel delectus quod,
          laboriosam dolor cum! Ipsa aspernatur modi, praesentium unde tempore,
          sit saepe optio quas placeat natus vitae aliquam beatae, ducimus ex.
          Eum beatae iure quis minima ea accusamus natus laboriosam nam
          laudantium alias non sit, provident placeat dolores cupiditate
          adipisci? Vel nihil expedita veritatis totam id distinctio quasi
          maxime accusantium voluptas ea, at unde non in earum harum vitae
          dolores voluptates quas aperiam eos! Doloremque quia ex at laudantium
          nihil ducimus repellat quae, quibusdam ipsam aliquid doloribus, modi
          vero quam aspernatur accusantium! Praesentium in nihil ipsam id?
          Cupiditate odit fugiat, necessitatibus esse voluptate quos pariatur
          excepturi blanditiis quis aut incidunt et ut, quo, accusantium ex.
          Eaque eius quos labore, in laudantium aliquam quod porro, nobis sequi
          distinctio maxime saepe atque fugit provident reprehenderit commodi
          dolorum ut sapiente placeat dolore. Earum modi a voluptatem
          consectetur reprehenderit eius velit repellendus consequatur! Eaque
          porro dolorum quia quod, officia error veritatis earum corrupti
          quisquam dolorem sint a. Minus nemo molestias sint accusamus nesciunt
          impedit illo quidem ut suscipit, ex, amet provident, similique fugit
          corporis reprehenderit aperiam repellat! Similique nostrum,
          consequatur magni quasi beatae officia eaque necessitatibus sequi,
          architecto, quod repellendus! Laudantium perspiciatis aspernatur quae
          eveniet magnam ab necessitatibus mollitia, a architecto blanditiis
          ducimus? Pariatur natus nihil doloribus consequuntur qui. Eaque
          deserunt tempore atque aperiam. Dolore tempora harum at error
          quibusdam, repellat natus itaque culpa porro? Assumenda obcaecati
          officia placeat est repellendus incidunt quibusdam. Repellendus
          molestias iusto, animi, odio fuga alias, excepturi accusamus
          voluptates magni dolore quidem dolorum sint a. Distinctio cum impedit
          totam iste similique magni, blanditiis fugit consequatur tempora
          repellat ipsa officia unde debitis tenetur rerum. Voluptate illum odit
          velit earum. Numquam nemo enim pariatur perferendis recusandae,
          voluptatibus dicta doloremque neque. Rerum, repellat rem. Voluptates
          magni aspernatur possimus atque deleniti odit tempore. Quisquam
          corporis laborum ipsa fugiat officia deleniti recusandae maxime fugit
          debitis harum excepturi cum quod architecto consectetur commodi
          blanditiis alias magnam maiores, in earum dicta aut rerum velit.
          Facere vel aperiam deleniti, officia quam voluptatum harum illum
          nesciunt, provident omnis eius distinctio saepe exercitationem.
          Sapiente, assumenda inventore! Odit, hic laboriosam nisi blanditiis ab
          maxime tenetur qui corporis ea necessitatibus, quam animi repellat eos
          ullam temporibus incidunt facilis minima molestias quod pariatur
          quisquam natus. Expedita dolorem ab beatae consectetur dolore unde
          architecto ut, eveniet maiores dolor impedit nisi eligendi
          necessitatibus neque saepe quibusdam adipisci culpa est quos odio. Vel
          nihil ratione veniam itaque necessitatibus, ipsum dolorum obcaecati
          nemo est unde non repudiandae soluta adipisci cupiditate distinctio
          ad? Consequatur vero magnam, odio vel consequuntur non adipisci animi
          quasi obcaecati laboriosam doloremque recusandae voluptatem
          perferendis quas explicabo fugit illo quos cupiditate fuga repudiandae
          dignissimos similique dolores! Eaque iste aliquam sint tempora magnam
          distinctio est et ducimus, laudantium laboriosam culpa accusamus,
          animi veniam! Praesentium laborum repellendus cum porro asperiores eos
          fugit provident accusamus optio nemo, nihil numquam ipsam ipsum
          reprehenderit earum, totam voluptate quisquam officia ullam minus
          nobis! Illum unde beatae corrupti laboriosam?
        </p>
      </section>
    </>
  );
};

export default Navbar