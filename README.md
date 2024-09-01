# Competence Project

This Github repository supports a research project investing the effetcs of privileged knowledge on people's competence judgments of others. 

The study includes one experiment wherein participants watch recordings of past players' game of Hangman and then have to rate their competence. Crucially, the experimental manipulates outcome knowledge. In the hidden outcome condition, participants see the answer (the word that is being guessed) revealed as the player they are watching guesses it. In the revealed outcome condition, participants are shown the answer before they watch the video of the player guessing the word. 

## Pre-registration 

OSF pre-registation for this work is avaialble [here](https://osf.io/khxn5). 

## Experiment Demos

You can try the experiment by cliking [here](http://161.35.32.77/publix/nsICzQho4ps). You will randomly be shown either the hidden or revealed outcome condition. 

You can find the accompanying code which was used for experiment programming in the **experiment_assets_competence_pairs** folder of this repository. 

## Analysis 

### Data 
You will notice there are two data folders. The folder named **All_batches_Data** containts the text files for all participants, organised in 5 batches, and retrieved from JATOS. All of the analysis, barring **speed_data** analysis in the **Exploratory** folder was run using csvs created from this data. This is because the data from the folder named **All_batches_speed_data** is more cumbersome, containing text and json files which held additional data which allowed game duration data to be extracted. 

### Preparatory
In the **Preparatory** folder, you will find:
* the power analysis used to determine the sample size of the study;
* the script which converted the raw text data (from the **All_Batches_Data** folder) into a usable csvs. A csv per batch was created and then merged into a file called **combined_pilot_batches.csv** which is used by most of the analysis scripts; 
* the missing data script labelled **missing_data_script**, which was used to check for any missing data;
* the comprehension and attention check scripts labelled **comprehension_attention_check_full** to ensure all participants had passed the relevant checks which ensured their data was of adequate quality to be included in the study. 

### Confirmatory 
The **Confirmatory** folder contains the analysis for the pre-registered hypotheses. 

### Exploratory
The **Exploratory** folder contains a series of exploratory analysis, which investigated the data beyond the original hypotheses. You will find 
* **Bayesian_t-tests** used on to test for evidence for the null on the confirmatory hypotheses;
* **Better_than_average_comparisons** used to see whether participants predicted position rankings and self-ratings were better than average;
* **Correlations** conducted across a variety of relationships within the data. Some were done on a participant level, taking the averages of their answers. Others were done on a broader level, such as taking the averages of predicted position and self-rating per word;
*  **Speed_analysis** analysed the impact of game duration (the duration of each player's game of hangman that the participants watched). This required using different (taken from **All_batches_speed_data**) and a different csv called **combined_speed_data**;
*  **Mixed_modelling** contains mixed effect modelling for different sets of predictors to see what variables impacted predicted position (i.e. participants competence judgments of the players). This modelling required further data manipulation to have usable dataframes for the modelling. It uses the **combined_data_speed.csv** file which is built from the **combined_pilot_batches.csv** used for the majoirty of the analysis. The **speed.time.word.csv** contains additional variables which were extracted from the original data, such as player competence which is the difference between the average number of misses all 
      players made when guessing a specific word and the number of misses an individual player when guessing that word. The **mixed_modelling** script also uses the **speed.time.word.csv** which is extracted from the **All_batches_speed** data in the **speed_analysis** folder and contains data on game duration. These two 
      csvs (**combined_data_speed.csv** and **speed.time.word.csv**) are combined in the **mixed_modelling** analysis to create the dataframe which is used for the modelling.  
    
