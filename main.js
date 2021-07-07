var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight-220;

document.addEventListener('DOMContentLoaded', setup)

MUTATION_RATE = 0.02
var particles = []
var SIZE = slider.value
var SPEED = speed.value;
var generation = 0;

class Particle{
    x = 0;
    y = 0;
    fitness = 0.0;
    current = 0;
    reached = false;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    get getX() {
        return this.x
    }
    get getY(){
        return this.y
    }
    update(){
        this.x += SPEED * this.genes[this.current][0]
        this.y += SPEED * this.genes[this.current][1] 
        this.current++;
    }
    setGenes(genes){
        this.genes = genes;
    }
    createGense(){
        this.genes = [];
        for(var i =0 ; i < 250; i++){
            this.genes[i] = [Math.random() - .5, Math.random() - .5]
        }
        return this.genes;
    }
    calFitness(goal){
        let dist = Math.sqrt((goal.x - this.x)**2 + (goal.y - this.y)**2);
        let norm = 1 - dist/(width+height);
        this.fitness = norm;
        console.log(this.fitness)
    }
}

const goal = new Particle(width-140, height-140);

function setup(){
    particles = []
    gno.innerText = generation;
    context.clearRect(0,0, width, height);

    for (var i = 0; i < SIZE; i++){
        particle = new Particle(Math.random() * 300 + 1, Math.random() * 300 + 1);
        particle.createGense();
        particles.push(particle);
        context.beginPath();
        context.arc(particle.getX, particle.getY, 12,0, Math.PI * 2, false)
        context.fillStyle = "rgba(5, 94, 143, 0.8)";
        context.fill();
    }
    context.beginPath();
    context.lineWidth = '7'
    context.rect(goal.getX, goal.getY, 70, 70)
    context.fillStyle = "rgba(50, 104, 13, 0.4)";
    context.strokeStyle = 'green';
    context.stroke();
    context.fill();

}
function update(){
    gno.innerText = generation;
    requestAnimationFrame(update)

    context.clearRect(0,0, width, height);

    for (var i = 0; i < SIZE; i++){
        particle = particles[i]
        if(!particle.reached){
            particle.update();
            context.beginPath();
            context.arc(particle.getX, particle.getY, 12,0, Math.PI * 2, false)
            context.fillStyle = "rgba(5, 94, 143, 0.8)";
            context.fill();
        }
    }

    context.beginPath();
    context.lineWidth = '7'
    context.rect(goal.getX, goal.getY, 70, 70)
    context.fillStyle = "rgba(50, 104, 13, 0.4)";
    context.strokeStyle = 'green';
    context.stroke();
    context.fill();
    if(particles[0].current == 250){
        updatePopulation()
    }       

}

function updatePopulation(){
    generation++;
    newPop = [];
    
    //mating pool creation
    matingpool = [];
    for(var i = 0; i < particles.length; i++){
        let p = particles[i];
        
        p.calFitness(goal)
        n = 2 ** (p.fitness * 10)

        for(var j = 0; j < n; j++){
            matingpool[j] = p;
        }
    }
    
    // crossover betwenn parent1 and parent2

    for(var k = 0; k < particles.length; k++){

        let parent1 = matingpool[Math.floor(Math.random() * matingpool.length)];
        let parent2 = matingpool[Math.floor(Math.random() * matingpool.length)];

        var child = new Particle(Math.random() * 300 + 1, Math.random() * 300 + 1)
        var cgense = []
        for(var i = 0; i < parent1.genes.length; i++){
            if (Math.random() < MUTATION_RATE) {
                cgense.push([Math.random() - 0.5, Math.random() - 0.5]);
            }
            if(i%2==0){
                cgense.push(parent1.genes[i])

            }else{
                cgense.push(parent2.genes[i])
            }
        }
        child.setGenes(cgense);
        newPop.push(child)
    }
    particles = newPop;
}

slider.oninput = function() {
    output.innerHTML = this.value;
    SIZE = slider.value;
    setup(); // update the setup
}
speed.oninput = function() {
    speedoutput.innerHTML = this.value;
    SPEED = speed.value;
}
