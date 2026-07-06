import React from 'react';

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-inter font-semibold">
        Christopher Sanders
      </h1>
      <p className="text-base md:text-xl mb-4 font-medium font-inter text-black/85 dark:text-white/85">
        Software Engineer
      </p>
      <p className="font-inter text-sm max-w-[560px] mb-6 font-bold text-left">
        I am an experienced full stack software engineer and a current AI Software Engineering student specializing in intelligent AI integrations.{' '}
        <a className="text-[#FFD438]">Python</a>,{' '}
        <a className="text-[#FFD438]">TypeScript</a>,{' '}
        <a>React</a> <a className="text-[#5ad2f7]">JS</a>, Next{' '}
        <a className="text-[#5ad2f7]">JS</a>,{' '}
        <a className="text-yellow-500">JavaScript</a>,{' '}
        <a className="text-yellow-500">HTML</a>,{' '}
        <a className="text-[#38bdf8]">CSS</a>,{' '}
        <a className="text-[#38bdf8]">Tailwind</a>,{' '}
        <a className="text-[#00ab41]">SQL</a>,{' '}
        <a className="text-[#00ab41]">PostgresSQL</a>,{' '}
        <a>Express</a> <a className="text-[#5ad2f7]">JS </a>
        and{' '}
        <a>Node</a> <a className="text-[#5ad2f7]">JS. </a>
        With these technologies and my problem solving solutions, I can build fast single-page application's or blazing full-stack web applications.
        <br />
        <br />
        Check out my work below.
      </p>
    </div>
  );
}

export default Intro;