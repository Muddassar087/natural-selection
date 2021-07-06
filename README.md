# natural-selection
<p>
  Natural selection is a javaScript code that uses the process of natural selection and find the optimal solution
</p>
process includes:
<ul>
  <li>Generate popuation (particles in our case)</li>
  <li>Calculate fitness of each individual</li>
  <li>Generate mating pool on the basis of fitness of individual</li>
  <li>Reproduce</li>
  <li>Mutate</li>
</ul>
repeat the given cycle
<h2>Fitness calculation</h2>
We are caluating fitness on the basis of minumum distance from goal (single line distance furmula than normalization it).
<h2>Mating pool</h2>
Any individual has higher fitness make its chances of selection to reprduce higher than with the low fitness by stuffing the higer fitness particle more than one with the low one
<h2>Particle</h2>
Individual particle has genes which are random vector values, fitness value its index of current (vector direction) and has reached at the goal or not

# Live version
https://naturalselection-muddassarapps.netlify.app/
