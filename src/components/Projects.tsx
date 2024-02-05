import classNames from 'classnames'
import React from 'react'
import ProjectCard from './shared/ProjectCard'
import LinkButton from './shared/LinkButton'
import { MdArrowOutward } from 'react-icons/md'

const Experience = ({ isActive }: {
  isActive: boolean
}) => {
  return (
    <section className='flex flex-col gap-10'>
      <ProjectCard
        title="Payfelix - Remastered"
        description="Payfelix is the future of payment acceptance. Integrate NFC payments in your app quickly and securely without proprietary card readers, compliance burden or unnecessary go-to-market costs."
        technologies={["Wordpress", "Elementor", "Namecheap", "Analytics", "Zoho", ]}
        githubLink="https://github.com/jaskarandeogan"
        liveLink="https://dev.softpos.cloud/staging/"
        image="https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/Payfelix.jpg?alt=media&token=33f30d76-99a1-4c4b-a74f-39471b3682f3&_gl=1*1ky5gq4*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjM2MS4xNC4wLjA."
        caption="Payfelix"
        projectBlogLink="/projects/payfelix"
        isNew={true}
      />
      <ProjectCard
        title="Splink"
        description="Splink, a mobile application developed over a focused 12-week period, is reshaping the shopping landscape. This project goes beyond mere transactions; it's about connecting people, saving money, and making a positive impact in our communities."
        technologies={['React Native', 'NodeJS', 'Google Vision API', 'AWS', 'MongoDB', 'CICD']}
        githubLink="https://github.com/jaskarandeogan"
        liveLink="/projects/splink"
        image="https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/splink-thumbnail.png?alt=media&token=83b2d8b4-3c54-488a-951a-de7a4db0eff6"
        caption="Splink"
        projectBlogLink="/projects/splink"
        isNew={true}
      />
      <ProjectCard
        title="Garden - Pulse"
        description="Introducing Pulse - the ultimate blockchain transaction insights application for the savvy cryptocurrency investor! With Pulse, you'll have access to real-time analytical information that can be turned into profit in the crypto market. Our cutting-edge technology is designed to provide you with invaluable insights on blockchain transactions, helping you stay ahead of the game in the fast-paced world of cryptocurrency. Whether you're a seasoned investor or just starting out, Pulse is your key to unlocking the full potential of cryptocurrency. Download Pulse today and start turning insights into revenue! #BlockchainInsights #CryptoInvesting #RealTimeAnalytics."
        technologies={["React", "NodeJS", "TailwindCSS", "AWS", "Stytch", "PostgreSQL", "CICD"]}
        githubLink="https://github.com/jaskarandeogan"
        liveLink="https://g-core-cloned.vercel.app/"
        image="https://firebasestorage.googleapis.com/v0/b/portfolio-e70ab.appspot.com/o/garden-logo.png?alt=media&token=de1a98bc-da86-43ae-8ee1-5cb719aa496f&_gl=1*hvjpmd*_ga*NzU2NzY3NjI5LjE2ODY1MzQ5MDI.*_ga_CW55HF8NVT*MTY5Nzk2NjAzNC40LjEuMTY5Nzk2NjU0MC42MC4wLjA."
        caption="Pulse"
        projectBlogLink="/projects/pulse"
      />
      <div>
        <LinkButton
          rightIcon={<MdArrowOutward />}
          classnames='px-0'
          onClick={() => window.open("/projects", "_self")}
        >
          Archives
        </LinkButton>
      </div>
    </section>
  )
}

export default Experience