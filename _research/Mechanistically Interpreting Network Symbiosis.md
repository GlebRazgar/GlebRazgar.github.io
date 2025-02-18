---
title: "Mechanistic Interpretability Through Network Symbiosis"
date: 2024-10-15
layout: post
---

Some of the most important transitional points in the history of science have been moement when we quantized the world. Much like zooming into sub-attomic interractions has brought us nuclear power, zooming into neuronal interractions holds promise in bringing us more capable intelligence.

Hitherto, network interpretability has been studies through two key lenses: Representational and Mechanistic. Both deal with different units of analyis. Representation engineering (RepE) studies high level network effects (top-down), whilst Mechanistic Interpretability (MI), similarly to physics, takes an axiomatic approach and tries to look into the network's constituents at their quanta (bottom-up). Though mechanistic view of networks is vastly more precise, representation engineering has found more practical applications. 
MI allowed us to zoom into networks, but scaling it's attomic precision for practical applications has not yet been done. In this post I propose a new, automated approach which builds on mechanistic precision but acts to make it practical as-if via representation modeling. 

<!-- width 750 is the perfect width for the blogs. height should be ~400 -->
<p align="center"><img src="../images/SymbioteNet.png" alt="Alt text" width="750" height="450" style="border-radius: 10px;"></p>
*<center>[SymbioteNet inhibiting a CNN]</center>*


---

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