import { IsUUID } from "class-validator";

export class DeleteEventDTO {
	@IsUUID()
	id: string;
}
