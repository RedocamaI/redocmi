import { Thought, Experiment } from './types';

export function getThoughtDetailsUrl(thought: Thought): string {
  return '/thoughts/' + thought.id;
}

export function getExperimentDetailsUrl(experiment: Experiment): string {
  return '/experiments/' + experiment.id;
}
