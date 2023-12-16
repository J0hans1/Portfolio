<template>
  <SectionWrapper>
    <div class="lg:w-2/5 mb-2">
      <h2>My Projects</h2>
      <p>
        Explore my diverse range of projects, where design and development
        converge. My portfolio showcases a blend of creativity and technical
        expertise, delivering beautiful and functional solutions.
      </p>
    </div>
    <div
      class="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 sm:flex sm:flex-col md:gap-20"
    >
      <Project
        name="Chimera"
        description="🦁🐉 Classless CSS framework for modern and soft styling. Inspired By SakuraCSS and Marx"
        tag1="Framework"
        tag2="Open source"
      />
      <Project
        name="Beerbuddy"
        description="BeerBuddy is a website where you can find, vote on, and review beers. The website displays craft beers from the US, and uses a dataset from Kaggle."
        tag1="Frontend"
        tag2="Design"
      />
      <Project
        name="Pokepedia"
        description="Tool for gathering information about pokemons."
        tag1="Frontend"
        tag2="Design"
      />
      <Project
        name="Portfolio"
        description="A personal portfolio website built with Nuxt.js, TailwindCSS and Chimera."
        tag1="Fullstack"
        tag2="Design"
      />
      <Project
        name="Toolbox"
        description="A platform for renting tools."
        tag1="Agile"
        tag2="Frontend"
      />
      <Project
        name="Helse-sprik"
        description="An error monitoring tool for the Norwegian welfare department."
        tag1="Design"
        tag2="Fullstack"
      />
    </div>
  </SectionWrapper>
</template>
