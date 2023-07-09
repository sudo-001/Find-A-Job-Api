import { ApiProperty } from "@nestjs/swagger";

export class UtilisateurDto {
    @ApiProperty()
    nom: string;

    @ApiProperty()
    prenom: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    mot_de_passe: string;

    @ApiProperty()
    postes_preferes: string;
}