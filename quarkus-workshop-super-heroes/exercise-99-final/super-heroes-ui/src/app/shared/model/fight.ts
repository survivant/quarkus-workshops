/**
 * Fight API
 * This API allows a hero and a villain to fight
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { FightFightDate } from './fightFightDate';


/**
 * Each fight has a winner and a loser
 */
export interface Fight {
    id?: number;
    winnerName: string;
    winnerLevel: number;
    winnerPicture: string;
    loserName: string;
    loserLevel: number;
    loserPicture: string;
}
