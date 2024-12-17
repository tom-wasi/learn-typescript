export class CreateChapterDTO {
    name!: string;
    description: string = '';
    exercises: string[] = [];
}

export class UpdateChapterDTO {
    name?: string;
    description?: string;
    exercises?: string[];
}