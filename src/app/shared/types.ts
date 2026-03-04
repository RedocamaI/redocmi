/**
 * Definition of data which is required to display a thought
 */
export interface Thought {
    id: string;
    title: string;
    date: string;
    excerpt?: string;
    body?: string;
}

/**
 * Definition of data which is required to display an experiment
 */
export interface Experiment {
    id: string;
    title: string;
    description?: string;
    date: string;
}