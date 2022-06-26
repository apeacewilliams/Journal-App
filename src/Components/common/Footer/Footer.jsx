import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <hr className='footer-seperator' />
      <section className='footer-social-media'>
        <a
          href='https://www.linkedin.com/in/peacewilliams/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </section>
      <section className='footer-info'>
        <section className='footer-info-left'>
          <section className='footer-info__name'>
            Software Engineer Peace
          </section>
        </section>
        <section className='footer-info-center'>
          <section className='footer-info__email'>shop.info@gmail.com</section>
        </section>
        <section className='footer-info-right'>
          <section className='footer-info__number'>123456789</section>
        </section>
      </section>
      <hr className='footer-seperator' />
    </section>
  );
}

export default Footer;
