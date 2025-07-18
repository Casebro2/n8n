import { z } from 'zod';
import { Z } from 'zod-class';

export class AiBuilderChatRequestDto extends Z.class({
	payload: z.object({
		question: z.string(),
		executionData: z.object({}).passthrough(), // Allow other properties from IRunData
		workflowContext: z.object({
			currentWorkflow: z
				.object({
					id: z.string().optional(),
				})
				.passthrough(), // Allow other properties from IWorkflowBase
		}),
	}),
}) {}
