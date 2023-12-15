<template>
  <SectionWrapper>
    <div class="w-2/5 mb-2">
      <h2>My Projects</h2>
      <p>
        Explore my diverse range of projects, where design and development
        converge. My portfolio showcases a blend of creativity and technical
        expertise, delivering beautiful and functional solutions.
      </p>
    </div>
    <div class="grid grid-cols-3 gap-20">
      <Project
        name="Chimera"
        description="🦁🐉 Classless CSS framework for modern and soft styling. Inspired By SakuraCSS and Marx"
      />
      <Project
        name="Beerbuddy"
        description="BeerBuddy is a website where you can find, vote on, and review beers. The website displays craft beers from the US, and uses a dataset from Kaggle."
      />
      <Project
        name="Pokepedia"
        description="Tool for gathering information about pokemons."
      />
      <Project
        name="Portfolio"
        description="A personal portfolio website built with Nuxt.js, TailwindCSS and Chimera."
      />
      <Project name="Toolbox" description="A platform for renting tools." />
      <Project
        name="Helse-sprik"
        description="An error monitoring tool for the Norwegian welfare department."
      />
    </div>
  </SectionWrapper>
</template>
