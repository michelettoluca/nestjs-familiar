import { IsInt, IsPositive, IsUUID } from "class-validator";

export class AddResultDTO {
	@IsUUID()
	playerId: string;

	@IsUUID()
	eventId: string;

	@IsUUID()
	deckId: string;

	@IsPositive()
	@IsInt()
	score: number;

	@IsInt()
	rank: number;
}
