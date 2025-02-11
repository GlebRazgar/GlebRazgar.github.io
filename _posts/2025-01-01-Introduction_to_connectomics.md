---
title: "Connectomics: Modelling The Mind"
date: 2025-01-10
layout: post
---

<p align="center"><img src="/images/fly.png" alt="Alt text" style="max-width: 80%; height: auto; border-radius: 10px;"></p>
<br>

<h3 align="center">1. Connectomics Overview</h3>

In general, a network is a function, one that is dependent on the pattern of its interconnections. In spite of intense efforts to elucidate the structure and function of the brain — which, after all, is just an example of such a complex function, we do not currently have a comprehensive map of the network connectivity that is functionally modellable. As you can imagine having an emulatable brain would be un-precidented. It would give us the ability to simulate drug effects, meantal disorders, brain disease and perhaps one day transgress death through uploading. Connectomics is a discipline that tries to create such mappings.

Connectomics is the production and study of connectomes: maps of connections within an organism's nervous system. More generally, it can be thought of as the study of neuronal wiring diagrams with a focus on how structural connectivity, individual synapses, cellular morphology, and cellular ultrastructure contribute to the make up of a network. Because these structures are extremely complex, methods within this field use a high-throughput application of functional and structural neural imaging, most commonly magnetic resonance imaging (MRI), electron microscopy, and histological techniques in order to increase the speed, efficiency, and resolution of these nervous system maps. To date, tens of large scale datasets have been collected spanning the nervous system including the various areas of cortex, cerebellum, the retina, the peripheral nervous system and neuromuscular junctions.

Generally speaking, there are two main types of connectomes; macroscale and micro/nano scale. Both deal with different units of analysis. Macroscale connectomics deals with high-level functional and structural MRI data to map out large fiber tracts and functional gray matter areas within the brain in terms of blood flow (functional) and water diffusivity (structural). Microscale connectomics is the mapping of small organisms' complete connectome using microscopy and histology. That is, all connections that exist in their central nervous system.

For the reasons of higher fidelity, micro scale connectomics is much more promising in the prospects of brain uploading and simulation. A reasonable assumption to make is that without mapping the brain down to it's synaptic weights one cannot accurately emulate it's functions. 

<hr style="border-top: 1px solid black;">

<h3 align="center">2. Methods</h3>
<hr style="border-top: 1px solid black;">

<h4 style="margin-bottom: 0"><u>2.0 Microscale Connectomics</u></h4> 
 Microscale connectomes focus on resolving individual cell-to-cell connectivity within much smaller volumes of nervous system tissue. These datasets are commonly collected using electron microscopy (EM) and offer single synapse resolution. The first microscale connectome encompassing an entire nervous system was produced for the nematode C. elegans in 1986. This was done by manually annotating printouts of the EM scans. Advances in EM acquisition, image alignment and segmentation, and manipulation of large datasets have since allowed for larger volumes to be imaged and segmented more easily. EM has been used to produce connectomes from a variety of nervous system samples, including publicly available datasets that encompass the entire brain and ventral nerve cord of adult Drosophila melanogaster, the full central nervous system (connected brain and ventral nerve cord) of larval Drosophila melanogaster, and volumes from mouse and human cortex. The National Institutes of Health (NIH) has now invested in creating an EM connectome of an entire mouse brain.

<p align="center"><img src="/images/connectome2.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 10px;"></p>
<div style="width: 100%; margin: auto; text-align: justify;"></div><br>

<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 1:</b>Connectome of a fruit fly obtained through electron microscopy imaging</p>
</div>

Electron microscopy is the imaging technique that provides the highest spatial resolution, which is crucial for being able to recover presynaptic and postsynaptic sites as well as fine morphological details. However, other imaging modalities are approaching the nanometer-scale resolution necessary for microscale connectomics. X-ray nanotomography using a synchrotron source can now reach <100 nm resolution, and can theoretically continue to improve. Unlike EM, this technique does not require the tissue being imaged to be stained with heavy metals or to be physically sectioned. Conventional light microscopy is constrained by light diffraction. Researchers have recently used stimulated emission depletion (STED) microscopy, a super-resolution light microscopy technique, to image the extracellular space of a sample from mouse hippocampus, allowing for reconstruction of all neurites within this volume. They then re-imaged the same tissue for fluorescently-tagged synaptic markers to find synaptic connectivity in the sample. However, this approach was limited to ~130 nm resolution, and was therefore not able resolve thin axons.

<p align="center"><img src="/images/mapping.gif" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 10px;"></p>
<div style="width: 100%; margin: auto; text-align: justify;"></div><br>

<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 2:</b>Animation showing the process of electron microscopy imaging. The microscope scans across brain tissue in sequential slices, and a semi-supervised cellular classifier creates a detailed 3D reconstruction of neural structures.</p>
</div>


<h4 style="margin-bottom: 0"><u>2.1 Macroscale Connectomics</u></h4> 
Macroscale connectomes are commonly collected using diffusion-weighted magnetic resonance imaging (dMRI or DW-MRI) and functional magnetic resonance imaging (fMRI). dMRI datasets can span the entire brain, imaging white matter between the cortex and subcortex, providing information about the diffusion of water molecules in brain tissue, and allowing researchers to infer the orientation and integrity of white matter pathways.[6] dMRI can be used in conjunction with tractography where it enables the reconstruction of white matter tracts in the brain.[6] It does so by measuring the diffusion of water molecules in multiple directions, as dMRI can estimate the local fiber orientations and generate a model of the brain's fiber pathways.[6] Meanwhile, tractography algorithms trace the likely trajectories of these pathways, providing a representation of the brain's anatomical connectivity.[6] Metrics such as fractional anisotropy (FA), mean diffusivity (MD), or connectivity strength can be computed from dMRI data to assess the microstructural properties of white matter and quantify the strength of (long-range) connections between brain regions.

<p align="center"><img src="/images/connectome_line.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 10px;"></p>
<div style="width: 100%; margin: auto; text-align: justify;"></div><br>

Once the brain imaging data is collected, it can be transformed into a graph neural network (GNN) representation for computational analysis. In this process, brain regions identified through imaging are represented as nodes in the graph, while the white matter connections between regions become edges. The edge weights are typically derived from connectivity metrics like FA values or fiber counts from tractography. This graph representation allows researchers to apply powerful GNN algorithms to analyze the brain's network properties, detect communities of highly connected regions, and model information flow through neural circuits. The GNN framework is particularly valuable as it can capture both the structural topology of brain connections and learn representations of how activity propagates through the network. This computational approach enables systematic study of brain organization and function at the network level.


<p align="center"><img src="/images/connectome_line.png" alt="Alt text" style="max-width: 70%; height: auto; border-radius: 10px;"></p>
<div style="width: 100%; margin: auto; text-align: justify;"></div><br>

<div style="width: 80%; margin: auto; text-align: center;">
  <p><b>Figure 1:</b>High-level MRI conectome of the human brain.</p>
</div>

