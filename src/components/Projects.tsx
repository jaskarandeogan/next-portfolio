import classNames from 'classnames'
import React from 'react'
import ProjectCard from './shared/ProjectCard'
import LinkButton from './shared/LinkButton'
import { MdArrowOutward } from 'react-icons/md'

const Experience = ({isActive}:{
  isActive: boolean
}) => {
   return (
    <section className='flex flex-col gap-10'>
      <ProjectCard
        title="Payfelix - Remastered"
        description="Payfelix is the future of payment acceptance. Integrate NFC payments in your app quickly and securely without proprietary card readers, compliance burden or unnecessary go-to-market costs."
        technologies={["Wordpress", "Elementor", "Namecheap", "GSAP", "Zoho"]}
        githubLink="https://github.com/jaskarandeogan"
        liveLink="https://dev.softpos.cloud/staging/"
        image = "/projects/payfelix.svg"
        caption = "Payfelix"
        projectBlogLink="/comingsoon"
      />
      <ProjectCard
        title="Garden - Pulse"
        description="Introducing Pulse - the ultimate blockchain transaction insights application for the savvy cryptocurrency investor! With Pulse, you'll have access to real-time analytical information that can be turned into profit in the crypto market. Our cutting-edge technology is designed to provide you with invaluable insights on blockchain transactions, helping you stay ahead of the game in the fast-paced world of cryptocurrency. Whether you're a seasoned investor or just starting out, Pulse is your key to unlocking the full potential of cryptocurrency. Download Pulse today and start turning insights into revenue! #BlockchainInsights #CryptoInvesting #RealTimeAnalytics."
        technologies={["React", "NodeJS", "TailwindCSS", "AWS", "Stytch", "PostgreSQL", "CICD"]}
        githubLink="https://github.com/jaskarandeogan"
        liveLink="https://g-core-cloned.vercel.app/"
        image = "/projects/garden-logo.png"
        caption = "Pulse"
        projectBlogLink="/comingsoon"
      />
      <ProjectCard
        title="Homechow App"
        description="Looking for a delicious home-cooked meal without all the hassle? Look no further than HomeChow! Our platform brings the comfort and convenience of home-cooked food straight to your doorstep. With just a few clicks, you can savor the flavors of a home-cooked meal without ever having to leave your house. Say goodbye to takeout and hello to HomeChow!"
        technologies={["NextJS", "TypeScript", "Firebase", "Mapbox", "TailwindCSS", "Storybook", "Cypress", "Netlify"]}
        githubLink="https://github.com/jaskarandeogan"
        liveLink="https://home-chow-cloned-6gcsivk52-jaskarandeogan.vercel.app/login"
        image = "/projects/homechow-logo.png"
        projectBlogLink="/comingsoon"
        caption='Homechow'
      />
      <ProjectCard
        title="AI Designs"
        description="It is a WordPress website to showcase Anandishwar's designer works and enhance their online presence. The website serves as a platform to engage with customers and promote their designs through social media. Its primary goal is to increase brand awareness and attract potential clients."
        technologies={["Wordpress", "Gutanberg", "Hostinger", "Elementor", "SEO"]}
        githubLink="https://github.com/jaskarandeogan"
        liveLink="https://anandishwar.com/"
        image = "/projects/ai-design.png"
        caption='AI Designs'
        projectBlogLink="/comingsoon"
      />
      <div>
        <LinkButton
          rightIcon={<MdArrowOutward />}
          classnames='px-0'
          onClick={() => window.open("/comingsoon", "_blank")}
        >
          Archives
        </LinkButton>
      </div>
    </section>
  )
}

export default Experience