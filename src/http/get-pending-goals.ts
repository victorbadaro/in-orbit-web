type PendingGoal = {
	id: string;
	title: string;
	desiredWeeklyFrequency: number;
	completionCount: number;
};

export type PendingGoalsResponse = PendingGoal[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
	const response = await fetch('http://localhost:3000/pending-goals');
	const data = await response.json();

	return data.pendingGoals;
}
