import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class EntrepriseDto {
    @ApiProperty()
    nom: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    adresse: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    numero_de_telephone: string;

    @ApiPropertyOptional()
    site_web: string;
    
}