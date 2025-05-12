---
title: "Connectomics: Modelling The Mind"
date: 2025-03-01
layout: post
---

<p align="center"><img src="/images/fly.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<br>

<h3 align="center">1. Introduction</h3>
Our brain - the jewel of consciousness - is a dynamic function. One that would be **UN-PRECEDENTED** to model. To model the brain is to simulate it, and simulating the brain could give us the ability to emulate **brain disorders**, **drug development**, and possibly one day **<u>consciousness</u>**.

In light of such a possible future, this piece tries to provide a holistic overview of the current brain emulation research, its methods, milestones, and future directions.

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Methods</h3>
What is popularly known as "brain emulation" is more formally studied as connectomics, a discipline dedicated to creating brain wiring maps (connectomes), with a focus on how synaptic connectivity, cellular morphology, and cellular ultrastructure contribute to the makeup of a network. Since brain activity is defined by structure and function, causal connectomics takes this further and overlays functional information on-top of structural in the aim of achieving a computational brain equivalent – or in cooler terms, a brain upload. 

Generally speaking, connectomics research operates at two distinct units of analysis: low-resolution (~macroscale) or high-resolution (~nanoscale). With low-resolution imaging, researchers try to map abstract brain structrue by using top-down functional and structural methods (e.g., MRI, MEG, etc.), to map large fiber tracts and gray matter regions within the brain, analyzing things like blood flow for functional insights and water diffusivity for structural details. 

On the other hand, high-resolution connectomics focuses on mapping the brain at a mechanistic level – capturing all the substrate at the maximum obtainable resolution, both through structural methods (e.g., microscopy, histology, etc.) and functional methods (e.g., calcium imaging, array tomography, etc.) – all in the vein of creating the finest digital reconstructions of the organism.

An important distinction between low vs high-res brain imaging apart from fidelity is their invasiveness. High-res imaging is **hyper** invasive as it often requires physically cutting the brain into micrometer-thick slices and imaging each individually, like in serial scanning electron microscopy (SSEM). This method, though fatal to the organism, provides unprecedented fidelity required for high-precision uploading. On the other end of the spectrum, low-res imaging like MRI works on live organisms, but as a result fails to capture the mechanistic details required to accurately simulate a brain. There tends to be a clear correlation between invasiveness and the amount of information you can extract in connectomics, and until we develop non-invasive imaging methods with nanoscale resolution, methods like SSEM will be most promising for detailed brain mapping.  

<h4 style="margin-bottom: 0"><u>2.1 Nanoscale Connectomics</u></h4> 
In high-res (nanoscale) connectomics, the goal is to obtain tiny mechanistic maps of neuron-to-neuron, synapse-to-synapse connectivity. Electron microscopy (EM) is the tool of choice here thanks to its awesome ~3-5nm precision, which is sufficient for imaging neurons down to their synapses. The issue with traditional optical microscopes is that they can't image samples below 200-300nm due to the diffraction limit of light. Instead, the EM works by bombarding heavy metal-stained tissue samples (typically with osmium, uranium, and lead) with accelerated electrons and detecting differential scattering of electrons between subcellular structures (think: cellular membranes, dendrites, synaptic vesicles, etc.,) all of which have differing electron densities. Despite their stellar resolution EM microscopes are expensive (~$2M) and really slow (imaging rate of ~10-100 μm³/s) due to beam dwell time, serial sectioning, and heavy metal staining overheads.

<p align="center" style="margin-bottom: 0;"><img src="/images/connectome2.png" alt="Alt text" style="max-width: 45%; height: auto; border-radius: 0px;"></p>

<div style="width: 100%; text-align: justify;"></div><br>
<p align="center"><img src="/images/multiconn.jpg" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 0px; mix-blend-mode: difference;"></p>

<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 2:</b> Connectome of a fruit fly (Drosophila melanogaster) obtained using Electron Microscopy, showing different neuronal types. The connectome consists of 140,000 neurons and is the size of a grain of sand.</p>
</div><br>

Alternatively to using very expensive and slow electron microscopes to elucidate the structure, we can expand the brain itself and image it with a standard microscope! Expansion Microscopy (ExM) is a method which allows to, quite literally – physically enlarge the tissue ~20x while maintaining its structural relationships. ExM works by embedding tissue in a swellable polymer (like a baby diaper matrix) that expands uniformly when you add water, increasing the physical size of the specimen whilst preserving its composition. The beauty of ExM is that the physical magnification enables imaging of tissue at the nanoscale using standard light microscopes. 


<p align="center"><img src="/images/exm.jpg" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply; filter: brightness(1.2) contrast(1.1);"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 3:</b>Expansion Microsope Proceedure.</p>
</div><br>

Unarguably one of the most futuristic connectomics methods is to use a particle collider called Synchrotrons to image the tissue via X-ray nanotomography. Synchrotron's appeal lies in its ability to bypass the need for heavy metal staining and physical sectioning unlike in electron microscope. The way it works is by accelerating electrons to near light speed, and then bending them to obtain incredibly potent X-ray beams (up to 10¹² photons/second) that are filtered to desired energy levels between 8-12 keV. Unlike conventional X-ray imaging that detects how tissues block X-rays, synchrotron-based connectomics measures how X-rays bend or phase shift when passing through brain sample due to different tissue refractive indices. This reveals unmyelinated axons and cell boundaries without staining. In theory, a synchrotron can image a full human brain in less than a year at ~40nm resolution, which is faster than using 350 electron microscopes in parallel!

Numerous other brain imaging techniques exist and are in the making, but that's a conversation for another rabbithole.

<h4 style="margin-bottom: 0"><u>2.1 Macroscale Connectomics</u></h4> 
Macroscale connectomes are typically mapped using diffusion-weighted magnetic resonance imaging (dMRI) and functional magnetic resonance imaging (fMRI). dMRI is like the Google Maps of the brain, charting the main highways of white matter that connect the cortex to the subcortex. It does so by tracking the diffusion of water molecules, which reveal the orientation of these neural pathways. When paired with tractography, dMRI doesn't stop at mapping, and reconstructs the brain's white matter tracts by measuring water diffusion in multiple directions, estimating local fiber orientations, and modeling the brain's fiber pathways. Tractography algorithms then take the baton, tracing the probable routes of these pathways to sketch out the brain's anatomical connectivity. From this data, we can extract metrics like fractional anisotropy (FA), mean diffusivity (MD), and connectivity strength, which help us assess the microstructural properties of white matter and quantify the robustness of long-range connections between brain regions. 

<p align="center"><img src="/images/connectome_seq.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply;"></p>
<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 4:</b> High-level human brain connectome is mapped in a three-step process: 
  1. Diffusion-weighted MRI (dMRI) is used to chart the brain's white matter tracts.
  2. Tractography algorithms establish the edges by tracing these pathways.  
  3. Nodes are defined by identifying brain regions connected by the edges.</p>
</div><br>

<h4 style="margin-bottom: 0"><u>2.3 Simulating </u></h4> 

Once you have the brain imaging data, the next step is to turn it into a functioning model. Though there isn't a definitive solution to converting data into simulations, The most standard procedure is as follows:

<div class="table-container" style="overflow-x: auto; width: 80%; margin: auto;">
  <table cellspacing="0" cellpadding="6" border="1.5" style="border: 1.5px solid black; border-collapse: collapse; width: 100%; font-size: 0.65em;">
    <caption style="caption-side: top; padding: 10px; color: black;"><b>Table 2.</b> Complete Brain Simulation Process.</caption>
    <thead>
      <tr>
        <th style="border: 1.5px solid black; color: black; text-align: center; font-weight: bold; width: 30%;">Step</th>
        <th style="border: 1.5px solid black; color: black; text-align: center; font-weight: bold; width: 70%;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="2">1. Pre-Processing</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Aligning all the imaged slices correctly into a 3D volume
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Removing of artifacts
        </td>
      </tr>
      
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">2. Segmentation & Proofreading</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Segmenting tissue using ML models (U-nets, flood filling networks, local shape descriptors) to outline cell bodies, trace axons, dendrites, and synaptic connections
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Proofreading and correcting errors of automated segmentation (incorrect connections, missed branches, and false mergers)
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • In barcoded specimens: using molecular barcodes to verify neuron identity and connections
        </td>
      </tr>
      
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;">3. Classification</td>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Classification and labelling of cell types (glia, astrocytes, etc.)
        </td>
      </tr>
      
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">4. Connectome Graph Creation</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Converting the 3D reconstruction into a structured graph representation
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Defining nodes (neurons) and edges (synaptic connections)
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Adding metadata about neuron types, molecular properties and synaptic strengths
        </td>
      </tr>
      
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">5. Simulation Model Building</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Choosing neuron models and parameters (LIF, Hodgkin-Huxley, etc.)
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Setting neurotransmitter types and receptor responses
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Implementing neuroplasticity mechanisms based on available data (short & long-term plasticity)
        </td>
      </tr>
      
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">6. Environment/Body Integration</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Connecting sensory inputs to appropriate neurons
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Mapping motor outputs to effectors
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Creating physical model of environment for interaction
        </td>
      </tr>
      
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="3">7. Execution</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Setting up infrastructure (partitioning the network across GPUs, setting up memory management, etc.)
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Initializating (membrane potential, ion concentration, etc.)
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Validation testing (comparing actual brain's neural activity patterns to the model)
        </td>
      </tr>
      
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="2">8. Parameter Calibration</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Tuning nueorn parameters based on functional data (calcium/voltage/etc., imaging)
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Calibrating neuroplasticity rules based on available data
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div style="width: 80%; margin: auto; text-align: justify; margin-bottom: 30px;">
  <p><b>Table 1:</b> The key steps of the brain simulation procedure, from initial tissue imaging preparation to final model calibration. The steps consecutively build on each other to create a complete digital representation of the original brain.</p>
</div>

<p align="center"><img src="/images/matricies.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 5:</b> Connectivity matrices of different species obrained through structural imaging. These matricies are then used as bedrocks for building simulation models.</p>
</div>

<hr style="border-top: 1px solid black;">

<h3 align="center">4. Progress</h3>

Some of the highlight organisms uploaded to date:

<h4 style="margin-bottom: 0"><u>3.1 Caenorhabditis Elegans</u></h4> 
Back in 1986, the first full nervous system connectome was painstakingly mapped for a C.elegans (CE) worm, using hand-annotated electron microscopy. The work kicked off a series of CE investigations that ended up winning a Nobel prize in 2002. This worm became a staple in neuroscience for it's simplicity of having just 302 neurons & 5000 synaptic connections. Today, we can simulate CEs down to a synapse using the most accurate biophysical models on hand. Despite being a useful and simple organism, CEs turned out to lack the complex electrophysiological properties and synaptic plasticity that are the hallmarks of human neurons. In short, it's an interesting organism, but now insightful enough. Thus, when compute, AI and microscopes allowed for it, researchers jumped on to mapping next promising organism - the fruit fly.

<p align="center"><img src="/images/celegan.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: difference; filter: saturate(0.6);"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 6:</b>Connectome of a C.elecan</p>
</div><br>


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
  <table cellspacing="0" cellpadding="6" border="1.5" style="border: 1.5px solid black; border-collapse: collapse; width: 100%; font-size: 0.65em;">
    <caption style="caption-side: top; padding: 10px; color: black;"><b>Table 2.</b> Innovations Needed for Full Human Brain Uploading.</caption>
    <thead>
      <tr>
        <th style="border: 1.5px solid black; color: black; text-align: center; font-weight: bold;">Domain</th>
        <th style="border: 1.5px solid black; color: black; text-align: center;">Current Limitations</th>
        <th style="border: 1.5px solid black; color: black; text-align: center;">Innovations Needed</th>
        <th style="border: 1.5px solid black; color: black; text-align: center;">Urgency /10</th>
        <th style="border: 1.5px solid black; color: black; text-align: center;">Feasibility /10</th>
      </tr>
    </thead>
    <tbody>
      <!-- SOFTWARE SECTION -->
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="4">Software</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Compression algorithms	
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Specialised compression algorithms for neuronal data. <br> [Sparse matrix compression achieving 100x-150x compression of the original dataset]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          7
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          10
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Simulation environments
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Holistic simulation engine. <br>[Integration of sensory and motor systems with simulated brains, modelling neuro-plasticity, etc.,]
          • Without simulations the field will not catch attention or find viability, making it imperative.
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          9
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          8
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Benchmarks
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Standardized metrics to validate simulations.<br>
          [Benchmarks to validate simulation accuracy and "human-likeness"]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          8
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          10
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Neuron segmentation and proofreading
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • AI reconstruction models with better attention mechanics.<br>
          [Current neuron reconstruction accounts for 95% of connectomics costs due to human leabelling need. Automated proofreading will solve this]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center;">
          9
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center;">
          10
        </td>
      </tr>
      
      <!-- HARDWARE SECTION -->
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="5">Hardware</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Electron microscope cost and speed
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Cheaper and faster EMs<br> [2x cost reduction (\$2M ➝ \$1M) and 10x-20x imaging speed increase (~50μm³/s ➝ 1000μm³/s) would make EM imaging feasible]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          10
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          7
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Data storage cost
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Exascale data centres. <br>[10x reduction in data storage cost would be helpful (from \$200M ➝ \$20M) for a 100x compressed human connectome. Generally there is a 10x-per-decade cost reduction in data storage by default, but can we speed it up?]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          10
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          5
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Compute cost
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Brain-like neuromorphic/biohybrid computing or cheaper GPU clusters.<br> [Cheaper mass compute will be neccessary. 1:1 biophysical simulations will require up to ~5.5×10²⁰ FLOP/s. Mores law will reduce prices by default, but can we design more brain-like hardware to speed it up?]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          7
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          5
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Manual wetlab work
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Automated robotics wetlab <br>[Cutting, imaging and staning apparature which will allow to increase the complexity of wetlab protocols whilst removing human error]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          4
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          7
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Destructive sample imaging
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Non-destructive nanoscale imaging method<br>
          [Imaging akin to nanoscale muon-tomography which can non-invasively scan the brain down to a synapse]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center;">
          10
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center;">
          3
        </td>
      </tr>
      
      <!-- WETWARE SECTION -->
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; vertical-align: middle; font-weight: bold;" rowspan="4">Wetware</td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Expansion microscopy magnification
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Faster expansion microscopy protocols<br>
          [Current ExM protocols achieves 10-40x expansion (25x = ~20nm) which is already enough, yet getting a consistent isotropic 40x zoom would equate it to EM resolution]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          6
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          8
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Lack of electron microscopy staining protocols
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Staining protocols for EM imaging.<br>
          Incomplete molecular characterization during electron microscopy imaging means we miss functional details of the upload. This is an issue with electron and synchrotron imaging, but not expansion microscopy. 
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          7
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          6
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • Scalability of protein profiling
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left; border-bottom: 1px dashed black;">
          • More scalable protein barcoding protocols. [Current protocols require multiple rounds of staining/washes and need testing on larger organisms]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          10
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center; border-bottom: 1px dashed black;">
          8
        </td>
      </tr>
      <tr>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • Scalability of functional nanoscale imaging
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: left;">
          • New nanometer functional imaging methods that can scale to whole brain neuron populations <br>
          [Current methods like voltage imaging, calcium imaging, etc., are either indirect, damaging or unscalable to whole brains. Thus methods like fUS with ~15 micrometers theoretical limit that scale to larger neuron populations could be the remedy]
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center;">
          10
        </td>
        <td style="border: 1.5px solid black; color: black; text-align: center;">
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

