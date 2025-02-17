---
title: "Connectomics: Modelling The Mind"
date: 2025-01-10
layout: post
---

<p align="center"><img src="/images/fly.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<br>

<h3 align="center">1. Connectomics Overview</h3>
In distilation, our brain is a dynamic function. One that is dependant on it's temporal states, nodes and their pattern of interconnections. As you could imagine, being able to model such a function would be **UN-PRECEDENTED**. Brain simulation would give us the ability to play out meantal disorders, brain disease, drug effects and possibly transgress death through uploading.

Connectomics is a discipline that tries to create such brain mappings. To be concrete, it is the production and study of connectomes: maps of connections within an organism’s nervous system. More generally, it can be thought of as the study of neuronal wiring diagrams with a focus on how structural connectivity, individual synapses, cellular morphology, and cellular ultrastructure contribute to the make up of a network. Because these structures are extremely complex, methods within this field use a high-throughput application of functional and structural neural imaging in order to increase the speed, efficiency, and resolution of these nervous system maps. 

While the complete human connectome remains unmapped today, this is will change in the upcoming few years. In light of this future, this post provides a holistic overview of connectomics, it's methods, applications and future directions.

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Methods</h3>

Generally speaking, there are two main types of connectomes; macroscale and micro/nano scale. Both deal with different units of analysis. Macroscale connectomics deals with high-level functional and structural MRI data to map out large fiber tracts and functional gray matter areas within the brain in terms of blood flow (functional) and water diffusivity (structural). Microscale connectomics is the mapping of small organisms' complete connectome using microscopy and histology. That is, all connections that exist in their central nervous system.

<h4 style="margin-bottom: 0"><u>2.1 Microscale Connectomics</u></h4> 
 Microscale connectomes focus on resolving individual cell-to-cell connectivity within much smaller volumes of nervous system tissue. These datasets are commonly collected using electron microscopy (EM) and offer single synapse resolution. The first microscale connectome encompassing an entire nervous system was produced for the nematode C. elegans in 1986. This was done by manually annotating printouts of the EM scans. Advances in EM acquisition, image alignment and segmentation, and manipulation of large datasets have since allowed for larger volumes to be imaged and segmented more easily. EM has been used to produce connectomes from a variety of nervous system samples, including publicly available datasets that encompass the entire brain and ventral nerve cord of adult Drosophila melanogaster, the full central nervous system (connected brain and ventral nerve cord) of larval Drosophila melanogaster, and volumes from mouse and human cortex. The National Institutes of Health (NIH) has now invested in creating an EM connectome of an entire mouse brain.

<p align="center"><img src="/images/connectome2.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 10px;"></p>
<div style="width: 100%; margin: auto; text-align: justify;"></div><br>

<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 1:</b>Connectome of a fruit fly obtained through electron microscopy imaging</p>
</div>

Electron microscopy is the imaging technique that provides the highest spatial resolution, which is crucial for being able to recover presynaptic and postsynaptic sites as well as fine morphological details. However, other imaging modalities are approaching the nanometer-scale resolution necessary for microscale connectomics. X-ray nanotomography using a synchrotron source can now reach <100 nm resolution, and can theoretically continue to improve. Unlike EM, this technique does not require the tissue being imaged to be stained with heavy metals or to be physically sectioned. Conventional light microscopy is constrained by light diffraction. Researchers have recently used stimulated emission depletion (STED) microscopy, a super-resolution light microscopy technique, to image the extracellular space of a sample from mouse hippocampus, allowing for reconstruction of all neurites within this volume. They then re-imaged the same tissue for fluorescently-tagged synaptic markers to find synaptic connectivity in the sample. However, this approach was limited to ~130 nm resolution, and was therefore not able resolve thin axons.

<video autoplay loop muted playsinline>
  <source src="output_with_alpha.webm" type="video/webm">
  <source src="output.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 2:</b>Animation showing the process of electron microscopy imaging. The microscope scans across brain tissue in sequential slices, and a semi-supervised cellular classifier creates a detailed 3D reconstruction of neural structures.</p>
</div>


<h4 style="margin-bottom: 0"><u>2.1 Macroscale Connectomics</u></h4> 
Macroscale connectomes are commonly collected using diffusion-weighted magnetic resonance imaging (dMRI or DW-MRI) and functional magnetic resonance imaging (fMRI). dMRI datasets can span the entire brain, imaging white matter between the cortex and subcortex, providing information about the diffusion of water molecules in brain tissue, and allowing researchers to infer the orientation and integrity of white matter pathways.[6] dMRI can be used in conjunction with tractography where it enables the reconstruction of white matter tracts in the brain.[6] It does so by measuring the diffusion of water molecules in multiple directions, as dMRI can estimate the local fiber orientations and generate a model of the brain's fiber pathways.[6] Meanwhile, tractography algorithms trace the likely trajectories of these pathways, providing a representation of the brain's anatomical connectivity.[6] Metrics such as fractional anisotropy (FA), mean diffusivity (MD), or connectivity strength can be computed from dMRI data to assess the microstructural properties of white matter and quantify the strength of (long-range) connections between brain regions.

<p align="center"><img src="/images/connectome_line.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<div style="width: 100%; margin: auto; text-align: justify;"></div><br>

Once the brain imaging data is collected, it can be transformed into a graph neural network (GNN) representation for computational analysis. In this process, brain regions identified through imaging are represented as nodes in the graph, while the white matter connections between regions become edges. The edge weights are typically derived from connectivity metrics like FA values or fiber counts from tractography. This graph representation allows researchers to apply powerful GNN algorithms to analyze the brain's network properties, detect communities of highly connected regions, and model information flow through neural circuits. The GNN framework is particularly valuable as it can capture both the structural topology of brain connections and learn representations of how activity propagates through the network. This computational approach enables systematic study of brain organization and function at the network level.




<hr style="border-top: 1px solid black;">

<h3 align="center">3. Applications</h3>
By comparing diseased and healthy connectomes, we can gain insight into certain psychopathologies, such as neuropathic pain, and potential therapies for them. Generally, the field of neuroscience would benefit from standardization and raw data. For example, connectome maps can be used to inform computational models of whole-brain dynamics. Current neural networks mostly rely on probabilistic representations of connectivity patterns. Connectivity matrices (checkerboard diagrams of connectomics) have been used in stroke recovery to evaluate the response to treatment via Transcranial Magnetic Stimulation. Similarly, connectograms (circular diagrams of connectomics) have been used in traumatic brain injury cases to document the extent of damage to neural networks.  

<p align="center"><img src="/images/matricies.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 1:</b>High-level MRI conectome of the human brain.</p>
</div>

Looking into these methods of research, they can reveal information about different mental illnesses and brain disorders. The tracking of brain networks in alignment with diseases and illnesses would be enhanced by these advanced technologies that can produce complex images of neural networks. With this in mind, diseases can not only be tracked, but predicted based on behavior of previous cases, a process that would take an extensive period of time to collect and record. Specifically, studies on different brain disorders such as schizophrenia and bipolar disorder with a focus on the connectomics involved reveal information. Both of these disorders have a similar genetic origin, and research found that those with higher polygenic scores for schizophrenia and bipolar disorder have lower amounts of connectivity shown through neuroimaging. This method of research tackles real-world applications of connectomics, combining methods of imaging with genetics to dig deeper into the origins and outcomes of genetically related disorders. Another study supports the finding that there is relation between connectivity and likelihood of disease, as researchers found those diagnosed with schizophrenia have less structurally complete brain networks. The main drawback in this area of connectomics is not being able to achieve images of whole-brain networks, therefore it is hard to make complete and accurate assumptions about cause and effect of diseases' neural pathways. Connectomics has been used to study patients with strokes using MRI imaging, however because such little research is done in this specific area, conclusions cannot be drawn regarding the relation between strokes and connectivity. The research did find results that highlight an association between poor connectivity in the language system and poor motor coordination, however the results were not substantial enough to make a bold claim. For behavioral disorders, it can be difficult to diagnose and treat because most situations revolve on a symptoms-based approach. However, this can be difficult because many disorders have overlapping symptoms. Connectomics has been used to find neuromarkers associated with social anxiety disorder (SAD) at a high precision rate in improving related symptoms. This is an expanding field and there is room for greater application to mental health disorders and brain malfunction, in which current research is building on neural networks and the psychopathology involved.

The human connectome can be viewed as a graph, and the rich tools, definitions and algorithms of the Graph theory can be applied to these graphs. Comparing the connectomes (or braingraphs) of healthy women and men, researchers have shown that in several deep graph-theoretical parameters, the structural connectome of women is significantly better connected than that of men. For example, women's connectome has more edges, higher minimum bipartition width, larger eigengap, greater minimum vertex cover than that of men. The minimum bipartition width (or, in other words, the minimum balanced cut) is a well-known measure of quality of computer multistage interconnection networks, it describes the possible bottlenecks in network communication: The higher this value is, the better is the network. The larger eigengap shows that the female connectome is better expander graph than the connectome of males. The better expanding property, the higher minimum bipartition width and the greater minimum vertex cover show deep advantages in network connectivity in the case of female braingraph.

Local measures of difference between populations of those graph have been also introduced (e.g. to compare case versus control groups). Those can be found by using either an adjusted t-test, or a sparsity model, with the aim of finding statistically significant connections which are different among those groups.

Human connectomes have an individual variability, which can be measured with the cumulative distribution function. By analyzing the individual variability of the human connectomes in distinct cerebral areas, it was found that the frontal and the limbic lobes are more conservative, and the edges in the temporal and occipital lobes are more diverse. A "hybrid" conservative/diverse distribution was detected in the paracentral lobule and the fusiform gyrus. Smaller cortical areas were also evaluated: precentral gyri were found to be more conservative, and the postcentral and the superior temporal gyri to be very diverse.







<hr style="border-top: 1px solid black;">

<h3 align="center">4. History</h3>

<h4 style="margin-bottom: 0"><u>4.1 Caenorhabditis Elegans</u></h4> 
The Caenorhabditis Elegans roundworm is a highly researched organism in the field of connectomics, of which a full connectome has been mapped using various imaging techniques, mainly serial-electron microscopy. This process involved studying the aging process of the C. elegans brain by comparing varying worms from birth to adulthood. Researchers found the biggest change with age is the wiring circuits, and that connectivity between and within brain regions increases with age. Regardless of the massive achievement of mapping the full C. Elegans connectome, more information is yet to be discovered about this brain network; The researchers noted that this can be done using comparative connectomics, comparing and contrasting different species' brain networks to pinpoint relations in behavior.

<p align="center"><img src="/images/celegan.jpg" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px; mix-blend-mode: multiply;"></p>
<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure X:</b>Connectome of a C.elecan</p>
</div>

The C. elegans has a simple nervous system, and data collection is more attainable. A study created a code that searches the connections within the C. elegans mapped connectome, as this data is already readily available. The findings were able to collect information about sensory neurons, interneurons, neck motor neurons, behavior, environmental influences, and more in deep detail. Overall, the experiment investigates the connection between neuroanatomy and behavior given that there is a lot of available information about the worm already discovered.

To provide context, the C. elegans roundworm has 302 neurons and 5000 synaptic connections, while the human brain has 100 billion neurons and more than 100 trillion chemical synapses. The human connectome has yet to be fully mapped with a limiting factor being the sheer amount of data collection that this will require in addition to the complexity in comparing individual connectomes given the great degree of variation in human neural circuits.

<h4 style="margin-bottom: 0"><u>4.1 Fruit Fly</u></h4> 

Within the last decade, largely owing to technological advancements in EM data collection and image processing, multiple synapse-scale connectome datasets have been generated for the fruit fly Drosophila melanogaster in its adult and larval forms.

The largest current dataset is the FlyWire segmentation and annotation of the female adult fly brain (FAFB) volume, which encompasses the entire brain of an adult. The FAFB volume was imaged by a team at Janelia Research Campus using a novel high-throughput serial section transmission electron microscopy (ssTEM) pipeline. Dr. Sebastian Seung's lab at Princeton used convolutional neural networks (CNNs) to automatically segment neurons and detect pre- and post-synaptic sites in the volume. This automated version was then used as a starting point for a massive community effort among fly neuroscientists to proofread neuronal morphologies by correcting errors and adding information about cell type and other attributes. This effort was conducted by FlyWire, conducted by Dr. Sebastian Seung and Dr. Mala Murthy (also at the Princeton Neuroscience Institute), in conjunction with a large team of other scientists and labs called the FlyWire Consortium. The full brain connectome produced by this effort is now publicly available and searchable through the FlyWire Codex.

Another adult brain dataset available is the Hemibrain, generated as a collaboration between the Janelia FlyEM team and Google. This dataset is an incomplete but large section of the fly central brain. It was collected using focused ion beam scanning electron microscopy (FIB-SEM) which generated an 8 nm isotropic dataset, then automatically segmented using a flood-filling network before being manually proofread by a team of experts. This dataset is also publicly available and searchable on a platform called neuPrint. Members of the fly connectomics community have made an effort to match cell types between FlyWire and the Hemibrain. They have found that at first pass, 61% of Hemibrain types are found in the FlyWire dataset and, out of these consensus cell types, 53% of "edges" from one cell type to another can be found in both datasets (but edges connected by at least 10 synapses are much more consistently found across datasets).

There are also currently two publicly available datasets of the adult fly ventral nerve cord (VNC). The female adult nerve cord (FANC) was collected using high-throughput ssTEM by Dr. Wei-Chung Allen Lee's lab at Harvard Medical School. It then underwent automatic segmentation and synapse prediction using CNNs, and researchers at Harvard and the University of Washington mapped motor neurons with cell bodies in the VNC to their muscular targets by cross-referencing between the EM dataset, a high-resolution nanotomography image volume of the fly leg, and sparse genetic lines to label individual neurons with fluorescent proteins. The FANC dataset is currently partially proofread and annotated. The male adult nerve cord (MANC) was collected and segmented at Janelia using FIB-SEM and flood-filling network protocols modified from the Hemibrain pipeline. In a collaboration between researchers at Janelia, Google, the University of Cambridge, and the MRC Laboratory of Molecular Biology (LMB), it is fully proofread and annotated with cell types and other properties, and searchable on neuPrint.

The connectome of a complete central nervous system (connected brain and VNC) of a 1st instar D. melanogaster larva has been collected as a single volume. This was once again undertaken at Janelia using FIB-SEM, similarly to the Hemibrain data collection. This dataset of 3016 neurons was segmented and annotated manually using CATMAID by a team of people mainly led by researchers at Janelia, Cambridge, and the MRC LMB.


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
</div>


Several labs have demonstrated successful expansion of human brain tissue samples by factors of 4-20x, achieving effective resolutions down to ~25nm. Thousands of studies have used EM at different scales, and it has been applied even to expand the whele brain in a single proceedure. At these scales, individual synapses become clearly visible under conventional microscopes. The faster imaging speeds of light microscopy, combined with the ability to process larger tissue volumes simultaneously, reduce the time required for human connectome mapping by orders of magnitude.

Complementary technologies are also emerging to address the speed bottleneck in connectome mapping. Multi-beam scanning electron microscopes with 61-169 parallel beams increase throughput by orders of magnitude compared to single-beam systems. Advanced tissue clearing methods like CLARITY and iDISCO+ enable rapid whole-brain imaging with light-sheet microscopy while preserving molecular information. 

On the computational front, automated segmentation using transformers has improved reconstruction accuracy while reducing manual proofreading requirements. Platforms like VAST and Neuroglancer leverage cloud computing for distributed annotation of massive datasets. High-throughput automated synapse detection algorithms using deep learning achieve human-level accuracy while processing volumes thousands of times faster than manual annotation.

These complementary approaches - from sample preparation to imaging to computational analysis - are creating a technological ecosystem that makes comprehensive connectome mapping increasingly feasible at larger scales even if the full brain mapping is currently ellusive. 





<h3 align="center">6. The Future</h3>

Having spoken to the god fathers of connectomics, it's apparent that whole human brain uploading is inevitable. We already have all the neccesary techniques to map the human brain, we just need to scale them. By the estimates of Ed Boyden, a full mapping of a human brain will follow withing the next 8 years. The biggest issue is funding. But can you place a pricing tag on digital immorality?

Dont let the now distroy the forever. Map the brain!