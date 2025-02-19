---
title: "Mechanistic Interpretability Through Network Symbiosis"
date: 2024-11-15
layout: post
---

<br>
<div class="table-container">
  <table>
    <tr>
      <td align="center">
        Gleb Razgar<br>
        <a href="mailto:gleb.razgar@gmail.com">gleb.razgar@gmail.com</a>
      </td>
      <td align="center">
        Hiroki Kozuki<br>
        <a href="mailto:hirokozuki@icl.ac.uk">hirokozuki@icl.ac.uk</a>
      </td>
    </tr>
  </table>
</div>

<h3 align="center">1. Background </h3>


AIs read our thoughts. Literally. In the context of neuroscience this is ever more so. For people with Brain Computer Interfaces (BCIs), AI doesnt just read their thoughts - it reads their intentions - and soon will be able to control them.

Learning to read and control AIs intentions before AI learns to control ours is a logical goal we should strive to accomplish. But how do we?

Hirerto, interpreting and steering AI's has mainly been done through two key lenses: Mechanistic and Representational. Both deal with different units of analysis. [Representation engineering](https://glebrazgar.github.io/2025/01/10/RepE.html) (RepE) is a top-down study of the network effects exibited by the populations of neurons, whilst Mechanistic Interpretability (MI), is a bottom-up study attempting to reverse engineer those effects from individual neurons and circuits. MI is precise but impractical, RepE is practical but imprecise. If we were to make it practica and precise to controll AI models, both of the techniques are insufficient. To solve this we [Hiro Kozuki](https://www.linkedin.com/in/hiroki-kozuki/) propose network symbiosis as a possible solution. 

<p align="center"><img src="../images/SymbioteNet.png" alt="Alt text" style="max-width: 50%; height: auto; mix-blend-mode: multiply;"></p>

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Network Symbiosis </h3>

To understand network Symbiosis consider brain computer interfaces. Putting neuro-plasticity aside BCIs learn your neuronal representations that map to a desired output. The idea behind Symbiotic networks is similar. You have a primary network (akin to the brain) and a secondary network (akin to Neuralink). 

- BCIs for networks.  
- Functional Overview.

<h3 align="center">3. Interpreting Networks </h3>

One of the earliest frameworks for Mechanistic universality was proposed by Chris Olah, who outlined three fundamental claims.

Claim 1: Features
Features are the fundamental unit of neural networks. They correspond to directions. These features can be rigorously studied and understood.

Claim 2: Circuits
Features are connected by weights, forming circuits.
These circuits can also be rigorously studied and understood.

Claim 3: Universality
Analogous features and circuits form across models and tasks.

These claims have recently been shown to be largely true[^1], and yet very little applicable work has sipped out of this framework.
As such, this is my tribute to interpretability and uncovering the unknown.  

---

High level purpose of the essay: Demonstrate the importance of analyzing networks through subsideary networks. 

---
# TABLE OF CONTENTS:
Before diving into my contributions its important to consider the key mech interp techniques used to date. 




### Neurons, Circuits, Features
- SOTA ways of doing neuron analysis
  - Activation Atlases: Visualizing individual neuron activations across many inputs
  - Feature Visualization: Using optimization to find inputs that maximally activate specific neurons
  - Network Dissection: Mapping neurons to human-interpretable concepts
  - Direct Linear Probes: Testing if specific information is directly encoded in neuron activations




- SOTA ways of analyzing circuits
- SOTA way of analyzing features 
- SOTA way of analyzing Universality


### 


#### Some PowerShell Code

```powershell
Write-Host "This is a powershell Code block";

# There are many other languages you can use, but the style has to be loaded first

ForEach ($thing in $things) {
    Write-Output "It highlights it using the GitHub style"
}
```



---
---
References:
[^1]: Olah, C., et al. (2020). ["Zoom In: An Introduction to Circuits."](https://distill.pub/2020/circuits/zoom-in/)