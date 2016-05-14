// app/transitions.js

export default function(){  
  this.transition(
    this.fromRoute('addons.liquid-fire.sample1'),
    this.toRoute('addons.liquid-fire.sample2'),
    this.use('toRight', {duration: 1500}),
    this.reverse('toLeft', {duration: 1500})
  );
}