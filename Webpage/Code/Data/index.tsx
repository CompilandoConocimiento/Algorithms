//import DynamicProgramming from './DynamicProgramming'
//import Search             from './Search'
//import Strings            from './Strings'
import NumberTheory         from './NumberTheory'

export const TopicsData: Array<TopicData> = [
    NumberTheory,
]

import {NameLink as NameLinkInterface, Text as TextInterface}                           from "./types"
import {AlgorithmData as AlgorithmDataInterface, TopicData as TopicDataInterface}       from "./types"
import {FilesData as FilesDataInterface, FilesDataResult as FilesDataResultInterface }  from "./types"
import {CodeStyles as CodeStylesInterfaces, CodeActions as CodeActionsInterfaces }      from "./types"
import {CodeConfig as CodeConfigInterface}                                              from "./types"
import {AlgorithmPageProps as AlgorithmPagePropsInterface }                             from "./types"
import {AlgorithmPageInformation as AlgorithmPageInformationInterface }                 from "./types"

export type NameLink = NameLinkInterface
export type Text = TextInterface

export type AlgorithmData = AlgorithmDataInterface
export type TopicData = TopicDataInterface

export type FilesData = FilesDataInterface
export type FilesDataResult = FilesDataResultInterface
export type CodeStyles = CodeStylesInterfaces
export type CodeActions = CodeActionsInterfaces

export type CodeConfig = CodeConfigInterface
export type AlgorithmPageProps = AlgorithmPagePropsInterface
export type AlgorithmPageInformation = AlgorithmPageInformationInterface