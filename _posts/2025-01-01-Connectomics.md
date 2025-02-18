---
title: "Connectomics: Modelling The Mind"
date: 2025-02-15
layout: post
---

<p align="center"><img src="/images/fly.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<br>

<h3 align="center">1. Connectomics Overview</h3>
Death is bad engineering.

Our brain - the jewl of conciseness - is a dynamic function. One that is dependant on it's temporal dynamics, neuronal activations and synaptic weights. As you could imagine, being able to model such a function would be **UN-PRECEDENTED**. To model the brains is to simulate it. And simulating the brain gives us the ability to emulate **meantal disorders**, **brain disease**, **drug responses** and possibly one day **<u>transgress death</u>**.

Connectomics is a discipline that tries to create such brain uploads. To be concrete, connectomics is the production and study of connectomes: maps of connections within an organism’s nervous system. More generally, it can be thought of as the study of neuronal wiring diagrams with a focus on how structural connectivity, individual synapses, cellular morphology, and cellular ultrastructure contribute to the make up of a network. Because these structures are extremely complex, methods within this field use a high-throughput application of functional and structural neural imaging in order to increase the speed, efficiency, and resolution of these nervous system maps.

While the complete human connectome remains unmapped today, this is will change in the **upcoming few years**. In light of such future, this post provides a holistic overview of connectomics, it's methods, applications and upcoming directions.

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Methods</h3>

Generally speaking, we can split connectomes into two categories: low-resolution (~macroscale) and high-resolution (~nanoscale), each focusing on different levels of analysis. Macroscale connectomics involves the use of high-level functional and structural MRI data to map large fiber tracts and functional gray matter regions within the brain, analyzing aspects such as blood flow for functional insights and water diffusivity for structural details. On the other hand, nanoscale connectomics focuses on mapping the entire connectome of small organisms through microscopy and histology, capturing all the connections present in their central nervous system.

<h4 style="margin-bottom: 0"><u>2.1 Nanoscale Connectomics</u></h4> 
Nanoscale connectomes are the microscopic maps of neuron-to-neuron connections, captured in tiny volumes of nervous tissue. Electron microscopy (EM) is the tool of choice here, offering the precision to see individual synapses. Back in 1986, the first full nervous system connectome was painstakingly mapped for C. elegans, using hand-annotating EM scans. Fast forward to today, and EM technology has evolved—improvements in image capture, alignment, and data labelling now allow us to map larger volumes with ease. EM has been pivotal in creating connectomes from various samples, including the entire brain and ventral nerve cord of adult fruit flies (Drosophila melanogaster) and sections of mouse and human cortex. The NIH is now ambitiously working on an EM connectome of a whole mouse brain.

<p align="center" style="margin-bottom: 0;"><img src="/images/connectome2.png" alt="Alt text" style="max-width: 45%; height: auto; border-radius: 0px;"></p>

<div style="width: 100%; text-align: justify;"></div><br>
<p align="center"><img src="/images/multiconn.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 0px; mix-blend-mode: multiply;"></p>

<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 1:</b> Connectome of a fruit fly (Drosophila melanogaster) obtained using Electron Microscopy, showing different neuronal types. The connectome consists of 140,000 neurons and is the size of the grain of sand.</p>
</div><br>

Electron microscopy reigns supreme in spatial resolution, making it essential for capturing the intricate dance of presynaptic and postsynaptic sites along with their delicate morphological nuances. However, this supremacy is not without challengers. X-ray nanotomography, which utilizes a synchrotron source to achieve sub-100 nm resolution, is gaining popularity. Its appeal lies in its ability to bypass the need for heavy metal staining and physical sectioning, offering potential for further refinement. In contrast, conventional light microscopy remains limited by diffraction, resulting in lower resolution, a topic I will delve into later. There are other methods methods bein tested, for instance stimulated emission depletion (STED) microscopy, which reconstructs neurites and identifies synaptic connections using fluorescent markers, but their resolution (130nm+) or mapping speed tends to render them less applicable.

<p align="center"><img src="/images/ssm.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 0px; mix-blend-mode: multiply;"></p>

<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 2:</b> Illustration showing how the fruit fly connectome, like the one above, was obtained. This involves slicing the fly's brain into ultra-thin sections and imaging each section with an electron microscope, after which a semi-supervised cellular classifier creates a detailed 3D reconstruction of neural structures.</p>
</div><br>


<h4 style="margin-bottom: 0"><u>2.1 Macroscale Connectomics</u></h4> 
Macroscale connectomes are typically mapped using diffusion-weighted magnetic resonance imaging (dMRI) and functional magnetic resonance imaging (fMRI). dMRI is like the Google Maps of the brain, charting the main highways of white matter that connect the cortex to the subcortex. It does this by tracking the diffusion of water molecules, which reveal the orientation of these neural pathways. When paired with tractography, dMRI doesn't just stop at mapping; it reconstructs the brain's white matter tracts by measuring water diffusion in multiple directions, estimating local fiber orientations, and modeling the brain's fiber pathways. Tractography algorithms then take the baton, tracing the probable routes of these pathways to sketch out the brain's anatomical connectivity. From this data, we can extract metrics like fractional anisotropy (FA), mean diffusivity (MD), and connectivity strength, which help us assess the microstructural properties of white matter and quantify the robustness of long-range connections between brain regions. 

<p align="center"><img src="/images/connectome_line.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 4:</b> High-level human brain connectome is mapped in a three-step process: 
  1. Diffusion-weighted MRI (dMRI) is used to chart the brain's white matter tracts.
  2. Tractography algorithms establish the edges by tracing these pathways.  
  3. Nodes are defined by identifying brain regions connected by the edges.</p>
</div><br>


So, you've got your brain imaging data. What next? Turn it into a graph neural network (GNN) to make it functional. Imagine each brain region as a node and the white matter connections as edges. The weights? They come from metrics like FA values or fiber counts. This graph setup lets us use GNN algorithms to dissect the brain's network dynamics, spot clusters of tightly-knit regions, and trace the flow of information through neural circuits. The beauty of the GNN framework lies in its dual ability to map the structural layout of brain connections and to learn how activity zips through the network. This computational method is poweful for systematically exploring brain organization and function at the network level.

<p align="center"><img src="/images/matricies.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 5:</b> Connectivity matrices of different species.</p>
</div>

<hr style="border-top: 1px solid black;">

<h3 align="center">3. Applications</h3>

By comparing the connectomes of the diseased and the healthy, we can glean insights into psychopathologies like neuropathic pain and potential therapies. Connectomics offers a window into the tangled web of mental illnesses and brain disorders. Advanced imaging technologies enhance our ability to track and even predict diseases based on historical data, though this is a time-consuming endeavor. Take schizophrenia and bipolar disorder, for instance—both share genetic roots, and studies show that individuals with higher polygenic scores for these conditions exhibit reduced connectivity in neuroimaging. This research marries imaging with genetics to probe the origins and outcomes of genetically linked disorders. Another study corroborates the link between connectivity and disease likelihood, noting that schizophrenia patients have less structurally complete brain networks. The Achilles' heel of connectomics is its current inability to capture whole-brain networks, complicating the task of drawing definitive cause-and-effect conclusions about neural pathways. While connectomics has been applied to stroke patients via MRI, the paucity of research in this niche means we can't yet make sweeping claims about strokes and connectivity. Some findings suggest a link between poor connectivity in the language system and motor coordination issues, but the evidence isn't robust enough for bold assertions. Behavioral disorders pose their own challenges, often diagnosed and treated based on symptoms that overlap across conditions. Connectomics has identified neuromarkers for social anxiety disorder (SAD) with high precision, improving symptom management. This burgeoning field holds promise for broad applications in all-things brain function related, as current research continues to build on neural networks and the associated psychopathology.

When you compare the connectomes of healthy women and men, the data reveals something intriguing: women's connectomes are not just slightly better connected, but significantly so. They boast more edges, a higher minimum bipartition width, a larger eigengap, and a greater minimum vertex cover. In simpler terms, women's brains are like a finely tuned network machine, with fewer communication bottlenecks and superior expansion capabilities. The minimum bipartition width, a metric borrowed from computer network design, indicates how well a network can handle communication without congestion. A larger eigengap suggests that women's connectomes are better at expanding, akin to a network that can grow without losing its coherence. These factors collectively highlight a superior network connectivity in female braingraphs, offering a fascinating glimpse into the intricacies of human brain networks.

Local measures of difference between populations of those graph have been also introduced (e.g. to compare case versus control groups). Those can be found by using either an adjusted t-test, or a sparsity model, with the aim of finding statistically significant connections which are different among those groups.

Now, let's talk about human connectomes and their quirks. Human connectomes have an individual variability, which can be measured with the cumulative distribution function. By analyzing the individual variability of the human connectomes in distinct cerebral areas, it was found that the frontal and the limbic lobes are more conservative, and the edges in the temporal and occipital lobes are more diverse. A "hybrid" conservative/diverse distribution was detected in the paracentral lobule and the fusiform gyrus. Smaller cortical areas were also evaluated: precentral gyri are found to be more conservative, and the postcentral and the superior temporal gyri to be very diverse, going to show vast diffs between connectomes.


<hr style="border-top: 1px solid black;">

<h3 align="center">4. History</h3>

<h4 style="margin-bottom: 0"><u>4.1 Caenorhabditis Elegans</u></h4> 
Caenorhabditis Elegans, the humble roundworm, is the darling of connectomics. We've mapped its entire connectome, primarily through serial-electron microscopy. This isn't just a static snapshot; it's a dynamic study of how its neural wiring evolves from birth to adulthood. The standout finding? As these worms age, their neural circuits become more interconnected. Yet, despite this monumental mapping feat, the C. Elegans connectome still holds secrets. Researchers suggest that comparative connectomics—juxtaposing brain networks across species—could unlock insights into behavioral correlations.

<p align="center"><img src="/images/celegan.jpg" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 6:</b>Connectome of a C.elecan</p>
</div><br>

C. elegans is a staple in neuroscience for its simplicity (302 neurons & 5000 synaptic connections), but let's not overstate its utility for human brain modeling. Its neurons lack the complex electrophysiological properties and synaptic plasticity that are hallmarks of human neurons. The neurotransmitter systems in C. elegans are basic, lacking the intricate signaling pathways found in humans. While uploading its neural data is insightful, it underscores the limitations of using C. elegans to model human brain functions.

<h4 style="margin-bottom: 0"><u>4.1 Fruit Fly</u></h4> 
In the past decade, thanks to leaps in EM data collection and image processing, we've churned out synapse-scale connectome datasets for the fruit fly, Drosophila melanogaster, both in its adult and larval stages.

The crown jewel of these datasets is the FlyWire segmentation of the female adult fly brain (FAFB) volume, capturing the entire adult brain. This was snapped at Janelia Research Campus using a cutting-edge high-throughput ssTEM pipeline. Over at Princeton, Dr. Sebastian Seung's lab deployed CNNs to auto-segment neurons and pinpoint synaptic sites. This automated groundwork set the stage for a colossal community endeavor, where fly neuroscientists dove in to refine neuronal morphologies, fix errors, and enrich data with cell types and other attributes. This was the FlyWire project, spearheaded by Dr. Seung and Dr. Mala Murthy, alongside a vast network of scientists and labs known as the FlyWire Consortium. The result? A full brain connectome, now open to the public and ready for exploration via the FlyWire Codex. 

There are other fruit fly datasets, such as the Hemibrain dataset and the ventral nerve cord datasets (FANC and MANC), which provide detailed insights into the fly's central brain and nerve cord, respectively. These datasets, available on platforms like neuPrint if you decide to find them.

<h4 style="margin-bottom: 0"><u>4.3 Mouse</u></h4> 
An online database known as MouseLight displays over 1000 neurons mapped in the mouse brain based on a collective database of sub-micron resolution images of these brains. This platform illustrates the thalamus, hippocampus, cerebral cortex, and hypothalamus based on single-cell projections. Imaging technology to produce this mouse brain does not allow an in-depth look at synapses but can show axonal arborizations which contain many synapses. A limiting factor to studying mouse connectomes, much like with humans, is the complexity of labeling all the cell types of the mouse brain; This is a process that would require the reconstruction of 100,000+ neurons and the imaging technology is advanced enough to do so.

Mice models in the lab have provided insight into genetic brain disorders, one study manipulated mice with a deletion of 22q11.2 (chromosome 22, a likely known genetic risk factor that leads to schizophrenia). The findings of this study showed that this impaired neural activity in mice's working memory is similar to what it does in humans.

<h4 style="margin-bottom: 0"><u>4.3 Human Connectome Project</u></h4> 
The Human Connectome Project (HCP), launched in 2009 by the National Institutes of Health, aimed to construct a comprehensive map of neural connections in the human brain. The project utilized advanced neuroimaging techniques, primarily diffusion MRI and resting-state functional MRI, to analyze brain connectivity patterns across a large cohort of healthy adults. Through the development of specialized acquisition protocols and analysis pipelines, the HCP has generated standardized connectivity data at approximately 2mm resolution, enabling the identification of major white matter pathways and functional networks. The project has also established protocols for data sharing, leading to the creation of a substantial open-access database of human brain connectivity.

While the HCP represents a significant advancement in understanding human brain organization, it operates at a macroscopic scale, mapping connections between brain regions rather than individual neurons. Unlike the complete neural reconstructions achieved in C. elegans or Drosophila, the HCP cannot resolve individual synaptic connections or local circuit architecture. This limitation stems from the fundamental resolution constraints of MRI-based techniques.

Electron microscopy reconstruction of human brain tissue offers the potential for synapse-level mapping of neural circuits. Modern EM techniques can achieve resolutions below 5nm, sufficient to identify individual synaptic vesicles and postsynaptic densities. However, scaling these approaches to human brain volumes presents substantial technical challenges. At current imaging speeds and computational capabilities, it would take an estimated several thousand years to fully map a human brain at the synaptic level. Mapping just 1 cubic millimeter of brain tissue currently takes months of imaging time and generates petabytes of data requiring extensive processing. 

<hr style="border-top: 1px solid black;">

<h3 align="center">5. Speeding up Connectomics</h3>

<h4 style="margin-bottom: 0"><u>5.1 Expansion Microscopy</u></h4> 

Mapping the human brain will require faster imaging techniques. Recent advances in expansion microscopy (ExM) offer promising solutions to accelerate human connectome mapping and address this need for faster techniques. ExM physically enlarges biological specimens while maintaining their structural integrity, allowing to aboundun slow and expensive electron microscopes in favour of conventional light microscopes to achieve effective nanoscale resolution, The technique works by embedding tissue in a swellable polymer that expands uniformly, increasing the physical size of the specimen while preserving relative spatial relationships between cellular structures. This physical magnification enables imaging of synaptic proteins and other nanoscale features using standard light microscopes, which can image larger volumes much faster than traditional EM approaches.


<p align="center"><img src="/images/exm.jpg" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply; filter: brightness(1.2) contrast(1.1);"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 1:</b>Expansion Microsope Proceedure.</p>
</div><br>


Several labs have demonstrated successful expansion of human brain tissue samples by factors of 4-20x, achieving effective resolutions down to ~25nm. Thousands of studies have used EM at different scales, and it has been applied even to expand the whele brain in a single proceedure. At these scales, individual synapses become clearly visible under conventional microscopes. The faster imaging speeds of light microscopy, combined with the ability to process larger tissue volumes simultaneously, reduce the time required for human connectome mapping by orders of magnitude.

Complementary technologies are also emerging to address the speed bottleneck in connectome mapping. Multi-beam scanning electron microscopes with 61-169 parallel beams increase throughput by orders of magnitude compared to single-beam systems. Advanced tissue clearing methods like CLARITY and iDISCO+ enable rapid whole-brain imaging with light-sheet microscopy while preserving molecular information. 

On the computational front, automated segmentation using transformers has improved reconstruction accuracy while reducing manual proofreading requirements. Platforms like VAST and Neuroglancer leverage cloud computing for distributed annotation of massive datasets. High-throughput automated synapse detection algorithms using deep learning achieve human-level accuracy while processing volumes thousands of times faster than manual annotation.

These complementary approaches - from sample preparation to imaging to computational analysis - are creating a technological ecosystem that makes comprehensive connectome mapping increasingly feasible at larger scales even if the full brain mapping is currently ellusive. 





<h3 align="center">6. The Future</h3>

Having spoken to the god fathers of connectomics, it's apparent that whole human brain uploading is inevitable. We already have all the neccesary techniques to map the human brain, we just need to scale them. By the estimates of Ed Boyden, a full mapping of a human brain will follow withing the next 8 years. The biggest issue is funding. But can you place a pricing tag on digital immorality?