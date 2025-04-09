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

Our brain - the jewel of consciousness - is a dynamic function. One that is dependent on its temporal dynamics, neuronal activations, and synaptic weights. As you could imagine, being able to model such a function would be **UNPRECEDENTED**. To model the brain is to simulate it. And simulating the brain gives us the ability to emulate **mental disorders**, **brain disease**, **drug development**, and possibly one day **<u>transgress death</u>**.  

Connectomics is a discipline that tries to create such brain uploads. To be concrete, connectomics can be thought of as the study of brain wiring maps (connectomes), with a focus on how connectivity, individual synapses, cellular morphology, and cellular ultrastructure contribute to the makeup of a network. Since our brain is more than just its structural composition, connectomics then tries to overlay functional imaging on top of structural maps to get a comprehensive model of the brain - or in fancier terms, a brain upload.

As sci-fi as I make it sound, connectomics is anything but fiction. We've already mapped and simulated small animals at nanometer imaging resolution. Though human connectome hasn't yet been mapped due to the colosal size of our brain, at the current rate of progress you can expect to see one within the **next few years** (more on scalind laws later). Even if you are skeptical about achieving 1:1 human brain simulations, a universe where we have even approximate human connectomes looks strikingly better than ours, and thus worth seriously entertaining. Even if drug testing can be simulated with a probablalistic degree of certanty - much like a weather forecast, this in itself would create new forms of medicine. In light of such possible future, this post tries to provide a holistic overview of connectomics, its methods, milestones, and future directions.

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Methods</h3>
Generally speaking, connectomics research operates at two distinct units of analysis: low-resolution (~macroscale) or high-resolution (~nanoscale). With low-resolution imaging, researchers try to gauge abstract brain functions by using top-down functional and structural MRI to map large fiber tracts and gray matter regions within the brain, analyzing things like blood flow for functional insights and water diffusivity for structural details. 
On the other hand, high-resolution connectomics focuses on mapping the brain at a mechanistic level - capturing all the substrate at the closest zoom with microscopes and histology to create highly detailed digital reconstructions of the organism.

An important distinction between low vs high-res brain imaging apart from fidelity is their invasiveness. High-res imaging is **hyper** invasive as it often requires physically cutting the brain into micrometer-thick slices and imaging each individually, like in serial scanning electron microscopy (SSEM). This method, though fatal to the organism, provides the unprecedented fidelity required for high-precision uploading. On the other end of the spectrum, low-res imaging like MRI works on live brains, but as a result fails to capture the mechanistic details required to accurately simulate a brain. There tends to be a clear correlation between invasiveness and the amount of information you can extract in connectomics, and until we develop non-invasive imaging methods with nanoscale resolution, methods like SSEM will be most promising for full brain simulation.  
 
Now, let's jump ahead from overview to specifics! 
<p align="center" style="color: #5ED464;"><em>Technical rabbit hole ahead—feel free to bypass</em></p>

<h4 style="margin-bottom: 0"><u>2.1 Nanoscale Connectomics</u></h4> 
In high-res (nanoscale) connectomics the goal is to obtain tiny mechanistic maps of neuron-to-neuron, synapse-to-synapse connectivity. Electron microscopy (EM) is the tool of choice here thanks to it's awesome ~3-5nm precison, which is sufficient for image neurons down to their synapses. The issue with traditional optical microscopes is that they can't image samples bellow 200-300nm due to the diffraction limit of light. Instead, the EM works by bombarding heavy metal-stained tissue samples (typically with osmium, uranium, and lead) with accelerated electrons and detecting differential scattering of electrons between subcellular structures (think: cellular membranes, dentriates, synaptic vesicles, etc.,) all of which have differing electron densities. 

<p align="center" style="margin-top: 50px; margin-bottom: -30px;"><img src="/images/full_fly.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 0px;"></p>

<div style="width: 100%; text-align: justify;"></div><br>
<p align="center"><img src="/images/multiconn.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 0px; margin-bottom: 40px"></p>

<div style="width: 80%; margin: auto; text-align: justify;">
  <p><b>Figure 1:</b> Connectome of a fruit fly (Drosophila melanogaster) obtained using Electron Microscopy, showing different neuronal types. The connectome consists of 140,000 neurons and is the size of a grain of sand.</p>
</div><br>

Alternatively to using very expensive and slow electron microscopes (~$2M per piece) to elucidate the structure, we can expand the brain itself and image it with a standard microscope! Expansion Microscopy (ExM) is a technique which allows to, quite litterally - physically enlarge the tissue ~20x while maintaining it's structural relationships. ExM works by embedding tissue in a swellable polymer (like a baby dyper matrix) that expands uniformly when you add water, increasing the physical size of the specimen whilst preserving it's composition. The beauty of ExM is that the physical magnification enables imaging of tissue at the nanoscale using standard light microscopes. 


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

<p align="center" style="color: #5ED464;"><em>Technical rabbit hole over—feel free to continue</em></p>

<hr style="border-top: 1px solid black;">

<h3 align="center">3. Applications</h3>

By comparing even the most basic structural connectomes of the diseased and the healthy, we can glean into psychopathologies like neuropathic pain, mental illnesses and brain disorders. Advanced imaging technologies enhance our ability to track and even predict diseases based on historical data, though this is a time-consuming endeavor. Take schizophrenia and bipolar disorder, for instance—both share genetic roots, and studies show that individuals with higher polygenic scores for these conditions exhibit reduced connectivity in neuroimaging. This research marries imaging with genetics to probe the origins and outcomes of genetically linked disorders. Another study corroborates the link between connectivity and disease likelihood, noting that schizophrenia patients have less structurally complete brain networks. The Achilles' heel of connectomics is its current inability to capture whole-brain networks, complicating the task of drawing definitive cause-and-effect conclusions about neural pathways. While connectomics has been applied to stroke patients via MRI, the paucity of research in this niche means we can't yet make sweeping claims about strokes and connectivity. Some findings suggest a link between poor connectivity in the language system and motor coordination issues, but the evidence isn't robust enough for bold assertions. Behavioral disorders pose their own challenges, often diagnosed and treated based on symptoms that overlap across conditions. Connectomics has identified neuromarkers for social anxiety disorder (SAD) with high precision, improving symptom management. This burgeoning field holds promise for broad applications in all-things brain function related, as current research continues to build on neural networks and the associated psychopathology.

When you compare the connectomes of healthy women and men, the data reveals something intriguing: women's connectomes are not just slightly better connected, but significantly so. They boast more edges, a higher minimum bipartition width, a larger eigengap, and a greater minimum vertex cover. In simpler terms, women's brains are like a finely tuned network machine, with fewer communication bottlenecks and superior expansion capabilities. The minimum bipartition width, a metric borrowed from computer network design, indicates how well a network can handle communication without congestion. A larger eigengap suggests that women's connectomes are better at expanding, akin to a network that can grow without losing its coherence. These factors collectively highlight a superior network connectivity in female braingraphs, offering a fascinating glimpse into the intricacies of human brain networks.

Local measures of difference between populations of those graph have been also introduced (e.g. to compare case versus control groups). Those can be found by using either an adjusted t-test, or a sparsity model, with the aim of finding statistically significant connections which are different among those groups.

Now, let's talk about human connectomes and their quirks. Human connectomes have an individual variability, which can be measured with the cumulative distribution function. By analyzing the individual variability of the human connectomes in distinct cerebral areas, it was found that the frontal and the limbic lobes are more conservative, and the edges in the temporal and occipital lobes are more diverse. A "hybrid" conservative/diverse distribution was detected in the paracentral lobule and the fusiform gyrus. Smaller cortical areas were also evaluated: precentral gyri are found to be more conservative, and the postcentral and the superior temporal gyri to be very diverse, going to show vast diffs between connectomes.


<hr style="border-top: 1px solid black;">

<h3 align="center">4. History & Progress</h3>

<h4 style="margin-bottom: 0"><u>4.1 Caenorhabditis Elegans</u></h4> 
Caenorhabditis Elegans, the humble roundworm, is the darling of connectomics. We've mapped its entire connectome, primarily through serial-electron microscopy. This isn't just a static snapshot; it's a dynamic study of how its neural wiring evolves from birth to adulthood. The standout finding? As these worms age, their neural circuits become more interconnected. Yet, despite this monumental mapping feat, the C. Elegans connectome still holds secrets. Researchers suggest that comparative connectomics—juxtaposing brain networks across species—could unlock insights into behavioral correlations.

<p align="center"><img src="/images/celegan.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
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

<h3 align="center">5. The Future</h3>
There is an invisible path to the first human connectome. Cost, fidelity and speed are still to give way to this future, but once they do, massive gpu orchestras will buzz the melody of first human AIs.



<!-- 

**Back in 1986, the first full nervous system connectome was painstakingly mapped for a C.elegan worm, using hand-annotated EM. Fast forward to today, and EM has evolved along with image capture, alignment, and data labeling by 3 orders of magnitude. For reference it took over a decate to map 302 neurons of the C.elegan worm in 1980s and 3 years to map 100,000+ neurons of a fruit fly in 2023. Now there is an ongoing effort to map the mouse brain with ~70 million neurons by 2027 using EM.**

**Do you feel the acceleration? Humans aren't far down the line...** -->