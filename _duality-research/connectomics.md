---
title: "Uploaded Intelligence: Overview"
authors: "Gleb Razgar"
layout: duality-posts
date: 2025-04-11
hidden: true
---



<p align="center"><img src="/images/fly green.png" alt="Alt text" style="max-width: 75%; height: auto; border-radius: 10px; margin-bottom: -40px;"></p>
<br>

<h3 align="center">1. Introduction</h3>
In the coming decade, human uploads might be born.

Darwin never anticipated life and evolution turning digital, yet unbeknownst to most, this has already changed. As sci-fi as it sounds, brain uploading has happened. Neuroscientists have prototypically uploaded multiple small animals (more on each later), and are currently working up the technology to upload humans.

A universe with even approximate human brain simulations looks strikingly better than ours, and thus worth seriously entertaining. Year-long brain medication trials might get compressed to day-long virtual runs. Neurodegenerative diseases could be modeled in silico. And intelligent systems might become more intelligible, easing the development of aligned AI. The discussion of how far brain uploading can go is long, but the core premise is in prosperity.

In light of such a possible future, this piece tries to provide a holistic overview of the current uploading research, its methods, milestones, and future directions.

<!-- HOW IT SHOULD START:
The legacy system of mortality is due for an upgrade. Brain uploading might be it.
1. Brain uploading, is   PUNCHY STARTING STATEMENT (hinting that uploading will be possible in our lifetime)
2. Intro of why we should persue it, even if we fall short. 
Whilst Darwin never anticipated digital evolution, it is now knocking on our door. 

Neuroscientists can now "upload" small animals, and in the coming decades we might be able to upload humans.  we might be able to do the same to humans. Soon, we might be able to upload humans. -->

<!-- Darwin never anticipated life turning digital to escape death, yet this might change within our lifetime. , yet it is probable that 

As of recently we can "upload" organisms, and perhaps within our lifetime - humans.

Our brain — the jewel of consciousness — is a dynamic function. One that is dependent on its temporal dynamics, neuronal activations, and synaptic weights. To model the brain is to simulate it, and simulating the brain gives us the ability to simulate **brain diseases**, **drug development**, **intelligence**, and possibly one day **<u>transgress death</u>**. Even if we end up falling short of 1:1 human brain simulations, a universe where we have even approximate brain models (much like weather forecasts) looks strikingly better than ours, and thus worth seriously entertaining. Year-long drug development trials for neuroscience might get compressed to day-long digital runs. Intelligent systems might become more comprehensible, and as a result creation of aligned AI prove tractable. The intellectual debate of how far it can go is all yours, but the core premise is in possible prosperity. -->

<!-- Our brain — the crown jewel of consciousness — is poorly understood, and even more poorly cured. The brain can be described as a function. One that is dependent on its temporal dynamics, neuronal activations, and synaptic weights. As you could imagine, being able to model or "upload" such a function would be **UNPRECEDENTED**. To upload the brain is to simulate it, and simulating the brain gives us the ability to emulate **brain diseases**, **drug development**, **intelligence**, and possibly one day **<u>consciousness</u>**.   -->

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Methods</h3>
What is popularly known as "brain uploading" is more formally studied as connectomics, a discipline dedicated to creating brain wiring maps (connectomes), with a focus on how synaptic connectivity, cellular morphology, and cellular ultrastructure contribute to the makeup of a network. Since our brain is a dynamic function represented by more than just its structure, connectomics tries to elucidate and overlay functional and structural information to obtain a full computational counterpart to the brain – or in cooler terms, a brain upload. 

Generally speaking, connectomics research operates at two distinct units of analysis: low-resolution (~macroscale) or high-resolution (~nanoscale). With low-resolution imaging, researchers try to map abstract brain structrue by using top-down functional and structural methods (e.g., MRI, MEG, etc.), to map large fiber tracts and gray matter regions within the brain, analyzing things like blood flow for functional insights and water diffusivity for structural details. 

On the other hand, high-resolution connectomics focuses on mapping the brain at a mechanistic level – capturing all the substrate at the maximum obtainable resolution, both through structural methods (e.g., microscopy, histology, etc.) and functional methods (e.g., calcium imaging, array tomography, etc.) – all in the vein of creating the finest digital reconstructions of the organism.

An important distinction between low vs high-res brain imaging apart from fidelity is their invasiveness. High-res imaging is **hyper** invasive as it often requires physically cutting the brain into micrometer-thick slices and imaging each individually, like in serial scanning electron microscopy (SSEM). This method, though fatal to the organism, provides unprecedented fidelity required for high-precision uploading. On the other end of the spectrum, low-res imaging like MRI works on live organisms, but as a result fails to capture the mechanistic details required to accurately simulate a brain. There tends to be a clear correlation between invasiveness and the amount of information you can extract in connectomics, and until we develop non-invasive imaging methods with nanoscale resolution, methods like SSEM will be most promising for detailed brain mapping.  

Now let's jump from the overview to specifics!  

<br>
<div style="position: relative; text-align: center;">
  <hr style="border-top: 1px solid black; margin: 0;">
  <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: black; margin: 0; padding: 0 10px; color: #5ED464;"><em>Technical rabbit hole ahead—feel free to bypass</em></p>
</div>
<br>

<h4 style="margin-bottom: 0"><u>2.1 Nanoscale Connectomics</u></h4> 
In high-res (nanoscale) connectomics, the goal is to obtain tiny mechanistic maps of neuron-to-neuron, synapse-to-synapse connectivity. Electron microscopy (EM) is the tool of choice here thanks to its awesome ~3-5nm precision, which is sufficient for imaging neurons down to their synapses. The issue with traditional optical microscopes is that they can't image samples below 200-300nm due to the diffraction limit of light. Instead, the EM works by bombarding heavy metal-stained tissue samples (typically with osmium, uranium, and lead) with accelerated electrons and detecting differential scattering of electrons between subcellular structures (think: cellular membranes, dendrites, synaptic vesicles, etc.,) all of which have differing electron densities. Despite their stellar resolution EM microscopes are expensive (~$2M) and really slow (imaging rate of ~10-100 μm³/s) due to beam dwell time, serial sectioning, and heavy metal staining overheads.

<p align="center" style="margin-top: 50px; margin-bottom: -30px;"><img src="/images/full_fly.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 0px;"></p>

<div style="width: 100%; text-align: justify;"></div><br>
<p align="center"><img src="/images/multiconn.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 0px; margin-bottom: 40px"></p>

<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 2:</b> Connectome of a fruit fly (Drosophila melanogaster) obtained using Electron Microscopy, showing different neuronal circuits. The connectome consists of 140,000 neurons and is the size of a grain of sand.</p>
</div><br>

Alternatively to using very expensive and slow electron microscopes to elucidate the structure, we can expand the brain itself and image it with a standard microscope! Expansion Microscopy (ExM) is a method which allows to, quite literally – physically enlarge the tissue ~20x while maintaining its structural relationships. ExM works by embedding tissue in a swellable polymer (like a baby diaper matrix) that expands uniformly when you add water, increasing the physical size of the specimen whilst preserving its composition. The beauty of ExM is that the physical magnification enables imaging of tissue at the nanoscale using standard light microscopes. 

<p align="center"><img src="/images/exm.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
</div>
<p align="center"><img src="/images/exm_results.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 1:</b>Pre expansion (left) and post expansion microsope imaging (right).</p>
</div><br>

Unarguably one of the most futuristic connectomics methods is to use a particle collider called Synchrotrons to image the tissue via X-ray nanotomography. Synchrotron's appeal lies in its ability to bypass the need for heavy metal staining and physical sectioning unlike in electron microscope. The way it works is by accelerating electrons to near light speed, and then bending them to obtain incredibly potent X-ray beams (up to 10¹² photons/second) that are filtered to desired energy levels between 8-12 keV. Unlike conventional X-ray imaging that detects how tissues block X-rays, synchrotron-based connectomics measures how X-rays bend or phase shift when passing through brain sample due to different tissue refractive indices. This reveals unmyelinated axons and cell boundaries without staining. In theory, a synchrotron can image a full human brain in less than a year at ~40nm resolution, which is faster than using 350 electron microscopes in parallel!

Numerous other brain imaging techniques exist and are in the making, but that's a conversation for another rabbithole.

<h4 style="margin-bottom: 0"><u>2.2 Macroscale Connectomics</u></h4> 
Macroscale connectomes are typically mapped using diffusion-weighted magnetic resonance imaging (dMRI) and functional magnetic resonance imaging (fMRI). dMRI is like the Google Maps of the brain, charting the main highways of white matter that connect the cortex to the subcortex. It does so by tracking the diffusion of water molecules, which reveal the orientation of these neural pathways. When paired with tractography, dMRI doesn't stop at mapping, and reconstructs the brain's white matter tracts by measuring water diffusion in multiple directions, estimating local fiber orientations, and modeling the brain's fiber pathways. Tractography algorithms then take the baton, tracing the probable routes of these pathways to sketch out the brain's anatomical connectivity. From this data, we can extract metrics like fractional anisotropy (FA), mean diffusivity (MD), and connectivity strength, which help us assess the microstructural properties of white matter and quantify the robustness of long-range connections between brain regions. 

<p align="center"><img src="/images/connectome_line.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; margin-top: 40px; margin-bottom: 40px;"></p>
<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 4:</b> High-level human brain connectome is mapped in a three-step process: 
  1. Diffusion-weighted MRI (dMRI) is used to chart the brain's white matter tracts.
  2. Tractography algorithms establish the edges by tracing these pathways.  
  3. Nodes are defined by identifying brain regions connected by the edges.</p>
</div><br>

<h4 style="margin-bottom: 0"><u>2.3 Simulating </u></h4> 

Once you have the brain imaging data, the next step is to turn it into a functioning model. Though there isn't a definitive solution to converting data into simulations, The most standard procedure is as follows:

<div class="table-container" style="overflow-x: auto; width: 80%; margin: auto;">
  <table cellspacing="0" cellpadding="6" border="1.5" style="border: 1.5px solid #5ED464; border-collapse: collapse; width: 100%; background-color: black; font-size: 0.65em;">
    <caption style="caption-side: top; padding: 10px; color: #5ED464;"><b>Table 2.</b> Complete Brain Simulation Process.</caption>
    <thead>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <th style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; font-weight: bold; width: 30%;">Step</th>
        <th style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; font-weight: bold; width: 70%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="2">1. Pre-Processing</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Aligning all the imaged slices correctly into a 3D volume
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Removing of artifacts
        </td>
      </tr>
      
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">2. Segmentation & Proofreading</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Segmenting tissue using ML models (U-nets, flood filling networks, local shape descriptors) to outline cell bodies, trace axons, dendrites, and synaptic connections
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Proofreading and correcting errors of automated segmentation (incorrect connections, missed branches, and false mergers)
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • In barcoded specimens: using molecular barcodes to verify neuron identity and connections
        </td>
      </tr>
      
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;">3. Classification</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Classification and labelling of cell types (glia, astrocytes, etc.)
        </td>
      </tr>
      
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">4. Connectome Graph Creation</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Converting the 3D reconstruction into a structured graph representation
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Defining nodes (neurons) and edges (synaptic connections)
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Adding metadata about neuron types, molecular properties and synaptic strengths
        </td>
      </tr>
      
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">5. Simulation Model Building</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Choosing neuron models and parameters (LIF, Hodgkin-Huxley, etc.)
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Setting neurotransmitter types and receptor responses
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Implementing neuroplasticity mechanisms based on available data (short & long-term plasticity)
        </td>
      </tr>
      
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">6. Environment/Body Integration</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Connecting sensory inputs to appropriate neurons
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Mapping motor outputs to effectors
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Creating physical model of environment for interaction
        </td>
      </tr>
      
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">7. Execution</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Setting up infrastructure (partitioning the network across GPUs, setting up memory management, etc.)
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Initializating (membrane potential, ion concentration, etc.)
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Validation testing (comparing actual brain's neural activity patterns to the model)
        </td>
      </tr>
      
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="2">8. Parameter Calibration</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Tuning nueorn parameters based on functional data (calcium/voltage/etc., imaging)
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Calibrating neuroplasticity rules based on available data
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div style="width: 80%; margin: auto; text-align: justify; margin-bottom: 30px;">
  <p><b>Table 1:</b> The key steps of the brain simulation procedure, from initial tissue imaging preparation to final model calibration. The steps consecutively build on each other to create a complete digital representation of the original brain.</p>
</div>

 <!-- The data will be raw, so it requires proccessing.  What next? Turn it into a graph neural network (GNN) to make it functional. Imagine each brain region as a node and the white matter connections as edges. The weights? They come from metrics like FA values or fiber counts. This graph setup lets us use GNN algorithms to dissect the brain's network dynamics, spot clusters of tightly-knit regions, and trace the flow of information through neural circuits. The beauty of the GNN framework lies in its dual ability to map the structural layout of brain connections and to learn how activity zips through the network. This computational method is powerful for systematically exploring brain organization and function at the network level. -->


<p align="center"><img src="/images/matricies_green.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 5:</b> Connectivity matrices of different species obrained through structural imaging. These matricies are then used as bedrocks for building simulation models.</p>
</div>

<br>
<div style="position: relative; text-align: center;">
  <hr style="border-top: 1px solid black; margin: 0;">
  <p style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: black; margin: 0; padding: 0 10px; color: #5ED464;"><em>Technical rabbit hole end</em></p>
</div>
<br>

<h3 align="center">3. Progress</h3>

Some of the highlight organisms uploaded to date:

<h4 style="margin-bottom: 0"><u>3.1 Caenorhabditis Elegans</u></h4> 
Back in 1986, the first full nervous system connectome was painstakingly mapped for a C.elegans (CE) worm, using hand-annotated electron microscopy. The work kicked off a series of CE investigations that ended up winning a Nobel prize in 2002. This worm became a staple in neuroscience for it's simplicity of having just 302 neurons & 5000 synaptic connections. Today, we can simulate CEs down to a synapse using the most accurate biophysical models on hand. Despite being a useful and simple organism, CEs turned out to lack the complex electrophysiological properties and synaptic plasticity that are the hallmarks of human neurons. In short, it's an interesting organism, but now insightful enough. Thus, when compute, AI and microscopes allowed for it, researchers jumped on to mapping next promising organism - the fruit fly.

<p align="center"><img src="/images/celegan.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 6:</b>Connectome of a C.elecan</p>
</div>

<h4 style="margin-bottom: 0"><u>3.2 Fruit Fly</u></h4> 
The next uploaded brain followed to be that of a fruit fly Drosophila. This was snapped using a higher-throughput ssTEM pipeline and segmented by a separate lab using an automated CNNs pipeline which allowed the field to jump from a mere 302 neurons and 5000 synaptic connections to ~100,000 neurons and 20 million synaptic connections (a 330 and 4,000-fold increase respectively). Unlike C. elegans, Drosophila exhibits complex cognitive behaviors including associative learning, sleep regulation, and decision-making that involve neural circuits with organizational principles shared with mammals. These mechanics make the fly connectome particularly interesting to simulate since they provide testable models for understanding how neural circuits integrate behaviors similar to human brain dynamics. It goes without saying that evolutionarily we are still vastly different, and thus ought to move closer to the human objective.

<h4 style="margin-bottom: 0"><u>3.3 Mouse</u></h4> 
Moving up the evolutionary tree, researchers have recently mapped a cubic millimeter of mouse visual cortex—a landmark achievement known as the MICrONS (Machine Intelligence from Cortical Networks) project. This cubic millimeter contains approximately 120,000 neurons and 650 million synapses, representing another scale jump from the fruit fly. Critically, this volume is large enough to capture complete local circuits and long-range projections that implement visual processing computations analogous to those in humans. Another fancy part is that the mouse brain architecture shares fundamental cortical organization, cell types, and circuit motifs with human brains. 

More interestingly, building on this success, the Intelligence Advanced Research Projects Activity (IARPA) has now launched an even more ambitious project called MICrONS Petascale, aiming to map the complete mouse brain of approximately 70 million neurons with hundreds of billions of connections. That will require processing exabytes of imaging data and is expected to be a human genome level insights bombshell. 

<h4 style="margin-bottom: 0"><u>3.4 Human</u></h4> 
As for uploading us – humans, there has been just as much work put into digitizing our brain.

At the low-res connectomics: The Human Connectome Project (HCP), launched in 2009, mapped structural connectivity using diffusion MRI tractography to trace white matter pathways and functional connectivity using resting-state fMRI to identify correlated activity patterns. Though it operates at millimeter resolution and thus doesnt allow to simulate the brain accurately, it mapped out the whole-brain coverage across all cortical and subcortical regions in about 1,200+ living humans which provides context about brain's architecture that will be usefull coming forth in nanoscale brain mapping.

As for high-res mapping: The first human nanoscale brain connectome milestone came in 2022-2023 with the mapping of a cubic millimeter of temporal cortex tissue from a neurosurgical sample. This "H01" dataset, produced by Harvard's Lichtman lab in collaboration with Google Research mapped approximately 50,000 neurons and 130 million synapses (1/1,000,000th of our brain size). Small volume? Yep. But thats how the start of acceleration towards full human brain uploading looks like.


<hr style="border-top: 1px solid black;">

<h3 align="center">4. Path Forward </h3>
To witness human emulations within the next decade three key disciplines need "unhobbling":

<div class="table-container" style="overflow-x: auto; width: 85%; margin: auto;">
  <table cellspacing="0" cellpadding="6" border="1.5" style="border: 1.5px solid #5ED464; border-collapse: collapse; width: 100%; background-color: black; font-size: 0.65em;">
    <caption style="caption-side: top; padding: 10px; color: #5ED464;"><b>Table 2.</b> Innovations Needed for Full Human Brain Uploading.</caption>
    <thead>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <th style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; font-weight: bold;">Domain</th>
        <th style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">Current Limitations</th>
        <th style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">Innovations Needed</th>
        <th style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">Urgency /10</th>
        <th style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">Feasibility /10</th>
      </tr>
    </thead>
    <tbody>
      <!-- SOFTWARE SECTION -->
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="4">Software</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Compression algorithms	
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Specialised compression algorithms for neuronal data. <br> [Sparse matrix compression achieving 100x-150x compression of the original dataset]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          7
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          10
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Simulation environments
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Holistic simulation engine. <br>[Integration of sensory and motor systems with simulated brains, modelling neuro-plasticity, etc.,]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          5
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          8
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Benchmarks
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Standardized metrics to validate simulations.<br>
          [Benchmarks to validate simulation accuracy and "human-likeness"]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          8
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          10
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Neuron segmentation and proofreading
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • AI reconstruction models with better attention mechanics.<br>
          [Current neuron reconstruction accounts for 95% of connectomics costs due to human leabelling need. Automated proofreading will solve this]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">
          9
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">
          10
        </td>
      </tr>
      
      <!-- HARDWARE SECTION -->
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="5">Hardware</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Electron microscope cost and speed
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Cheaper and faster EMs<br> [2x cost reduction (\$2M ➝ \$1M) and 10x-20x imaging speed increase (~50μm³/s ➝ 1000μm³/s) would make EM imaging feasible]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          10
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          7
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Data storage cost
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Exascale data centres. <br>[10x reduction in data storage cost would be helpful (from \$200M ➝ \$20M) for a 100x compressed human connectome. Generally there is a 10x-per-decade cost reduction in data storage by default, but can we speed it up?]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          10
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          5
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Compute cost
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Brain-like neuromorphic/biohybrid computing or cheaper GPU clusters.<br> [Cheaper mass compute will be neccessary. 1:1 biophysical simulations will require up to ~5.5×10²⁰ FLOP/s. Mores law will reduce prices by default, but can we design more brain-like hardware to speed it up?]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          7
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          5
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Manual wetlab work
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Automated robotics wetlab <br>[Cutting, imaging and staning apparature which will allow to increase the complexity of wetlab protocols whilst removing human error]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          4
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          7
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Destructive sample imaging
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Non-destructive nanoscale imaging method<br>
          [Imaging akin to nanoscale muon-tomography which can non-invasively scan the brain down to a synapse]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">
          10
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">
          3
        </td>
      </tr>
      
      <!-- WETWARE SECTION -->
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="4">Wetware</td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Expansion microscopy magnification
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Faster expansion microscopy protocols<br>
          [Current ExM protocols achieves 10-40x expansion (25x = ~20nm) which is already enough, yet getting a consistent isotropic 40x zoom would equate it to EM resolution]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          6
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          8
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Lack of electron microscopy staining protocols
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Staining protocols for EM imaging.<br>
          Incomplete molecular characterization during electron microscopy imaging means we miss functional details of the upload. This is an issue with electron and synchrotron imaging, but not expansion microscopy. 
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          7
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          6
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • Scalability of protein profiling
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left; border-bottom: 1px dashed #5ED464;">
          • More scalable protein barcoding protocols. [Current protocols require multiple rounds of staining/washes and need testing on larger organisms]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          10
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center; border-bottom: 1px dashed #5ED464;">
          8
        </td>
      </tr>
      <tr style="background-color: rgba(94, 212, 100, 0.1);">
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • Scalability of functional nanoscale imaging
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: left;">
          • New nanometer functional imaging methods that can scale to whole brain neuron populations <br>
          [Current methods like voltage imaging, calcium imaging, etc., are either indirect, damaging or unscalable to whole brains. Thus methods like fUS with ~15 micrometers theoretical limit that scale to larger neuron populations could be the remedy]
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">
          10
        </td>
        <td style="border: 1.5px solid #5ED464; background-color: rgba(94, 212, 100, 0.1); color: #5ED464; text-align: center;">
          6
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div style="width: 85%; margin: auto; text-align: justify;">
  <p><b>Table 2:</b> The key limitations and corresponding innovations required across software, hardware, and wetware domains to advance connectomics toward complete brain uploading. These are some of the most common limitations and innovations raised by dozens of connectomics researchers I interviewed. The numerics of the table are largely based on fermi estimates of my own as well as of my colleagues from MIT, and should be viewed as educated guesess.</p>
</div>

Considering that software, hardware and wetwear sectors are accelerating nonlinearly, it is probable that each of those innovations will be reached this very decade. 
The first uploaded intelligence effort will likely cost \$1-\$10 billion — prohibitive for most — but like the human genome project which plummeted from \$3 billion to \$400, it should come as no surprise that brain uploads too will likely drop in price by orders of magnitude within a few years after the first upload. I hope you are excited. 


<h3 align="center">5. Conclusion </h3>
There is an invisible path to the first human uploads. Cost, fidelity and speed of connectomics are still to give way to this future, but once they do, massive GPU orchestras will buzz the melody of the first human AIs.



<!-- 

**Back in 1986, the first full nervous system connectome was painstakingly mapped for a C.elegan worm, using hand-annotated EM. Fast forward to today, and EM has evolved along with image capture, alignment, and data labeling by 3 orders of magnitude. For reference it took over a decate to map 302 neurons of the C.elegan worm in 1980s and 3 years to map 100,000+ neurons of a fruit fly in 2023. Now there is an ongoing effort to map the mouse brain with ~70 million neurons by 2027 using EM.**

**Do you feel the acceleration? Humans aren't far down the line...** -->
