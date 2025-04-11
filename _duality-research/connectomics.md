---
title: "Mapping The Mind: Introduction"
authors: "Gleb Razgar"
layout: duality-posts
date: 2025-03-01
hidden: true
---



<p align="center"><img src="/images/fly_green.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 10px; margin-bottom: 0;"></p>
<br>

<h3 align="center">1. Connectomics Overview</h3>
Death is bad engineering.

Our brain — the jewel of consciousness — is a dynamic function. One that is dependent on its temporal dynamics, neuronal activations, and synaptic weights. As you could imagine, being able to model such a function would be **UNPRECEDENTED**. To model the brain is to simulate it. And simulating the brain gives us the ability to emulate **brain disease**, **drug development**, **consciouseness** and possibly one day **<u>transgress death</u>**.  

What is popularly known as "brain uploading" is more formally studied as connectomics, a discipline dedicated to creating brain wiring diagrams (connectomes), with a focus on how synaptic connectivity, cellular morphology, and cellular ultrastructure contribute to the makeup of a network. Since our brain is more than just its structure, connectomics tries to elucidate and overlay functional and structural information to obtain a full computational counterpart to brain – or in fancier terms, a brain upload.

As sci-fi as I make it sound, connectomics is anything but fiction. We've already mapped and simulated small animals at nanometer imaging resolution. Though human connectome hasn't yet been mapped due to the colosal size of our brain, at the current rate of progress you can expect to see one within the **next few years** (more on scalind laws later). Even if you are skeptical about achieving 1:1 human brain simulations, a universe where we have even approximate human connectomes looks strikingly better than ours, and thus worth seriously entertaining. Even if drug testing can be simulated with a probablalistic degree of certanty, much like a weather forecast, this in itself would create new forms of medicine. In light of such possible future this post tries to provide a holistic overview of connectomics, its methods, milestones, and future directions.

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Methods</h3>
Generally speaking, connectomics research operates at two distinct units of analysis: low-resolution (~macroscale) or high-resolution (~nanoscale). With low-resolution imaging, researchers try to gauge abstract brain functions by using top-down functional and structural methods (e.g: MRI, MEG, etc.), to map large fiber tracts and gray matter regions within the brain, analyzing things like blood flow for functional insights and water diffusivity for structural details. 

On the other hand, high-resolution connectomics focuses on mapping the brain at a mechanistic level – capturing all the substrate at the maximum obtainable resolution, both through structural methods (e.g: microscopy, histology, etc.) and functional methods (e.g: calcium imaging, array tmomography, etc.) – all in vein of creating the finest digital reconstructions of the organism.

An important distinction between low vs high-res brain imaging apart from fidelity is their invasiveness. High-res imaging is **hyper** invasive as it often requires physically cutting the brain into micrometer-thick slices and imaging each individually, like in serial scanning electron microscopy (SSEM). This method, though fatal to the organism, provides the unprecedented fidelity required for high-precision uploading. On the other end of the spectrum, low-res imaging like MRI works on live organisms, but as a result fails to capture the mechanistic details required to accurately simulate a brain. There tends to be a clear correlation between invasiveness and the amount of information you can extract in connectomics, and until we develop non-invasive imaging methods with nanoscale resolution, methods like SSEM will be most promising for full brain simulation.  

Now, let's jump ahead from overview to specifics!  

<br>
<div style="position: relative; text-align: center;">
  <hr style="border-top: 1px solid black; margin: 0;">
  <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: black; margin: 0; padding: 0 10px; color: #5ED464;"><em>Technical rabbit hole ahead—feel free to bypass</em></p>
</div>
<br>
<h4 style="margin-bottom: 0"><u>2.1 Nanoscale Connectomics</u></h4> 
In high-res (nanoscale) connectomics the goal is to obtain tiny mechanistic maps of neuron-to-neuron, synapse-to-synapse connectivity. Electron microscopy (EM) is the tool of choice here thanks to it's awesome ~3-5nm precison, which is sufficient for imaging neurons down to their synapses. The issue with traditional optical microscopes is that they can't image samples below 200-300nm due to the diffraction limit of light. Instead, the EM works by bombarding heavy metal-stained tissue samples (typically with osmium, uranium, and lead) with accelerated electrons and detecting differential scattering of electrons between subcellular structures (think: cellular membranes, dentriates, synaptic vesicles, etc.,) all of which have differing electron densities. Despite their stellar resolution EM microscopes are expensive (~$2M) and really slow (imaging rate of ~10-100 μm³/s) due to beam dwell time, serial sectioning, and heavy metal staining overheads.

<p align="center" style="margin-top: 50px; margin-bottom: -30px;"><img src="/images/full_fly.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 0px;"></p>

<div style="width: 100%; text-align: justify;"></div><br>
<p align="center"><img src="/images/multiconn.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 0px; margin-bottom: 40px"></p>

<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 1:</b> Connectome of a fruit fly (Drosophila melanogaster) obtained using Electron Microscopy, showing different neuronal circuits. The connectome consists of 140,000 neurons and is the size of a grain of sand.</p>
</div><br>

Alternatively to using very expensive and slow electron microscopes to elucidate the structure, we can expand the brain itself and image it with a standard microscope! Expansion Microscopy (ExM) is a method which allows to, quite litterally – physically enlarge the tissue ~20x while maintaining it's structural relationships. ExM works by embedding tissue in a swellable polymer (like a baby dyper matrix) that expands uniformly when you add water, increasing the physical size of the specimen whilst preserving it's composition. The beauty of ExM is that the physical magnification enables imaging of tissue at the nanoscale using standard light microscopes. 

<p align="center"><img src="/images/exm.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
</div>
<p align="center"><img src="/images/exm_results.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 1:</b>Pre v/s  Post - Expansion Microsope imaging.</p>
</div><br>

EM reigns supreme in spatial resolution, but there are other technologies worth keeping an eye on. Un-arguably one of the most awesome connectomics methods is to use particle coliders called Synctrons to image the tissue via X-ray nanotomography. Synctron's appeal lies in it's ability to bypass the need for heavy metal staining and physical sectioning unlike in electron microscope. The way it works is by accelerating electrons to near light speed, and when then bending them to obtain incredibly potent X-ray beams (up to 10¹² photons/second) that are filtered to desired energy levels between 8-12 keV. Unlike conventional X-ray imaging that detects how tissues block X-rays, synchrotron-based connectomics measures how X-rays bend or phase shift when passing through brain sample due to different tissue refractive indicies. This reveals unmyelinated axons and cell boundaries without staining. In theory, a synctron can image a full human brain in less than a year at ~40nm resolution, which is faster than uising 350 electron microscopes in paralell!

Numerous other brain imaging techniques exist and are in the making, but thats a conversation for another rabithole.

<h4 style="margin-bottom: 0"><u>2.1 Macroscale Connectomics</u></h4> 
Macroscale connectomes are typically mapped using diffusion-weighted magnetic resonance imaging (dMRI) and functional magnetic resonance imaging (fMRI). dMRI is like the Google Maps of the brain, charting the main highways of white matter that connect the cortex to the subcortex. It does so by tracking the diffusion of water molecules, which reveal the orientation of these neural pathways. When paired with tractography, dMRI doesn't stop at mapping, and reconstructs the brain's white matter tracts by measuring water diffusion in multiple directions, estimating local fiber orientations, and modeling the brain's fiber pathways. Tractography algorithms then take the baton, tracing the probable routes of these pathways to sketch out the brain's anatomical connectivity. From this data, we can extract metrics like fractional anisotropy (FA), mean diffusivity (MD), and connectivity strength, which help us assess the microstructural properties of white matter and quantify the robustness of long-range connections between brain regions. 

<p align="center"><img src="/images/connectome_line.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; margin-top: 40px; margin-bottom: 40px;"></p>
<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 4:</b> High-level human brain connectome is mapped in a three-step process: 
  1. Diffusion-weighted MRI (dMRI) is used to chart the brain's white matter tracts.
  2. Tractography algorithms establish the edges by tracing these pathways.  
  3. Nodes are defined by identifying brain regions connected by the edges.</p>
</div><br>


So, you've got your brain imaging data. What next? Turn it into a graph neural network (GNN) to make it functional. Imagine each brain region as a node and the white matter connections as edges. The weights? They come from metrics like FA values or fiber counts. This graph setup lets us use GNN algorithms to dissect the brain's network dynamics, spot clusters of tightly-knit regions, and trace the flow of information through neural circuits. The beauty of the GNN framework lies in its dual ability to map the structural layout of brain connections and to learn how activity zips through the network. This computational method is poweful for systematically exploring brain organization and function at the network level.


<p align="center"><img src="/images/matricies.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; filter: invert(100%) hue-rotate(270deg) saturate(80%);"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 5:</b> Connectivity matrices of different species.</p>
</div>

<br>
<div style="position: relative; text-align: center;">
  <hr style="border-top: 1px solid black; margin: 0;">
  <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: black; margin: 0; padding: 0 10px; color: #5ED464;"><em>Technical rabbit hole end</em></p>
</div>
<br>

<h3 align="center">3. Applications</h3>
Digitizing brains may prove simpler than deciding what to do with them afterward. The possibilities certainly stretch beyond my imagination. Neuroscience, robotics, and AI unhobbling seems to be the most pertinent, but I trust that you dear reader can simulate your own possible favorites, and instead meet you in the next section.

<hr style="border-top: 1px solid black;">

<h3 align="center">4. Progress</h3>

<h4 style="margin-bottom: 0"><u>4.1 Caenorhabditis Elegans</u></h4> 
Back in 1986, the first full nervous system connectome was painstakingly mapped for a C.elegan worm, using hand-annotated electron microscopy. The work kicked off a series c.elegan investigations that ended up winning a nobel prize in 2002. C. elegans became a staple in neuroscience for its simplicity of having just 302 neurons & 5000 synaptic connections. Unfortunately it turns out it's neurons lack the complex electrophysiological properties and synaptic plasticity that are the hallmarks of human neurons. In short, it's an interesting organism, but turned out not to be insightful enough. Thus, when compute, AI and microscopes allowed for it researchers jumped on to mapping next promising organism - the fruit fly.

<p align="center"><img src="/images/celegan.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 6:</b>Connectome of a C.elecan</p>
</div><br>

<h4 style="margin-bottom: 0"><u>4.1 Fruit Fly</u></h4> 
The next uploaded brain followed to be that of a fruit fly Drosophilia. This was snapped using a higher-throughput ssTEM pipeline and segmented by a seperate lab using an automated CNNs pipeline which allowed the field to jump from a mere 302 neurons and 5000 synaptic connections to ~100,000 neurons and 20 million synaptic connections (a 330 and 4,000-fold increase respectively). Unlike C. elegans, Drosophila exhibits complex cognitive behaviors including associative learning, sleep regulation, and decision-making that involve neural circuits with organizational principles shared with mammals. These mechanics makes the fly connectome particularly interesting to simulate since they provide testable models for understanding how neural circuits integrate behaviors similar to human brain dynamics. It goes without saying that evolutionarily we are still vastly different, and thus aught to move closer to the human objective.

<h4 style="margin-bottom: 0"><u>4.3 Mouse</u></h4> 
Moving up the evolutionary tree, researchers have recently mapped a cubic millimeter of mouse visual cortex—a landmark achievement known as the MICrONS (Machine Intelligence from Cortical Networks) project. This cubic millimeter contains approximately 120,000 neurons and 650 million synapses, representing another scale jump from the fruit fly. Critically, this volume is large enough to capture complete local circuits and long-range projections that implement visual processing computations analogous to those in humans. Another fancy part is that the mouse brain architecture similarity—shares fundamental cortical organization, cell types, and circuit motifs with human brains. 

More interestingly, building on this success, the Intelligence Advanced Research Projects Activity (IARPA) has now launched an even more ambitious project called MICrONS Petascale, aiming to mapp the complete mouse brain of approximately 70 million neurons with hundreds of billions of connections. That will require processing exabytes of imaging data and is expected to be a human genome level isnights bombshell. 

<h4 style="margin-bottom: 0"><u>4.3 Human Connectome Project</u></h4> 
As for uploading us humans, there has been just as much work put into mapping our brain.

At the low-res connectomics: The Human Connectome Project (HCP), launched in 2009, mapped structural connectivity using diffusion MRI tractography to trace white matter pathways and functional connectivity using resting-state fMRI to identify correlated activity patterns. Though it operates at millimeter resolution and thus doesnt allow to simulate the brain accurately, it mapped out the whole-brain coverage across all cortical and subcortical regions in about 1,200+ living humans which provides context about brain's architecture that will be usefull coming forth in nanoscale brain mapping.

As for high-res mapping: The first human nanoscale brain connectome milestone came in 2022-2023 with the mapping of a cubic millimeter of temporal cortex tissue from a neurosurgical sample. This "H01" dataset, produced by Harvard's Lichtman lab in collaboration with Google Research mapped approximately 50,000 neurons and 130 million synapses (1/1,000,000th of our brain size). This is the first big step on the brain uploading moon!

<hr style="border-top: 1px solid black;">

<h3 align="center">5. The Future</h3>
There is an invisible path to the first human connectome. Cost, fidelity and speed are still to give way to this future, but once they do, massive gpu orchestras will buzz the melody of first human AIs.



<!-- 

**Back in 1986, the first full nervous system connectome was painstakingly mapped for a C.elegan worm, using hand-annotated EM. Fast forward to today, and EM has evolved along with image capture, alignment, and data labeling by 3 orders of magnitude. For reference it took over a decate to map 302 neurons of the C.elegan worm in 1980s and 3 years to map 100,000+ neurons of a fruit fly in 2023. Now there is an ongoing effort to map the mouse brain with ~70 million neurons by 2027 using EM.**

**Do you feel the acceleration? Humans aren't far down the line...** -->