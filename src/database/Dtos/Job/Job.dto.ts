import { ApiProperty } from "@nestjs/swagger";

export class JobDto {
    @ApiProperty()
    titre: string;

    @ApiProperty()
    type_de_contrat: string;

    @ApiProperty()
    remote: boolean;

    @ApiProperty()
    nombre_poste: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    competences: string;

    @ApiProperty()
    niveau_expertise: string;

    @ApiProperty()
    lieu: string;

    @ApiProperty()
    salaire: string;

    @ApiProperty()
    deadline: Date;
}