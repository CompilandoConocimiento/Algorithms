import React, { FunctionComponent, useState, useEffect, Fragment } from "react"
import M from "materialize-css"

import { AlgorithmData, AlgorithmPageInformation, AlgorithmPageProps } from "../../Data"
import { FilesDataResult } from "../../Data"
import { Loading } from "../Helpers"
import ConfigurationMenu from "./ConfigurationMenu"
import getCodeText from "./GetCodeText"
import FAB, { FABElement } from "./FAB"
import ConfigContext from "./ConfigContext"

import * as Styles from "./Styles.module.css"

const linkToServer = "https://raw.githubusercontent.com/CompilandoConocimiento/Reference/master"

interface VisualizerProps {
  AlgorithmData: AlgorithmData
  TopicLink: string
}
interface VisualizerState {
  Component?: React.FunctionComponent<AlgorithmPageProps>
  Config?: AlgorithmPageInformation
  FilesDataResult?: FilesDataResult
  Modal?: M.Modal
  isLatexReady: boolean
}

const AlgorithmVisualizer2: FunctionComponent<VisualizerProps> = props => {
  const [Component, setComponent] = useState<any>(null)
  const [Config, setConfig] = useState<any>(null)
  useEffect(() => {
    props.AlgorithmData.module()
      .then(module => module.default)
      .then(moduleData => {
        setComponent(() => moduleData.Component)
        setConfig(moduleData.Config)
      })
  }, [])

  // WFT HOW DO YOU KNOW SIZE AFTER CHANGING PAGE??
  const [componentDidReallyMount, mount] = useState(false)
  useEffect(() => {
    if (Component) window["MathJax"].Hub.Typeset()
  }, [componentDidReallyMount])

  const [code, setCode] = useState<any>(null)
  useEffect(() => {
    if (Component && Config) {
      const baseLink = `${linkToServer}/Code/${props.TopicLink}`
      getCodeText(baseLink, Config.filesData, setCode)
    }
  }, [componentDidReallyMount])

  const [modal, setModal] = useState<any>(null)
  useEffect(() => {
    const modalNode = document.querySelector(".modal")
    setModal(M.Modal.init(modalNode!, {}))
  }, [])

  const FABToDo: FABElement[] = [
    {
      color: "teal",
      closeOnClick: true,
      icon: "palette",
      onClick: () => modal && modal.open(),
    },
    {
      color: "indigo",
      closeOnClick: false,
      icon: "code",
      onClick: () => {
        M.Toast.dismissAll()
        M.toast({ html: "Toggle comments" })

        document.querySelectorAll(".hljs-comment").forEach((comment: any) => {
          if (comment.style.display === "") comment.style.display = "initial"
          comment.style.display = comment.style.display == "initial" ? "none" : "initial"
        })
      },
    },
    {
      color: "blue",
      closeOnClick: true,
      icon: "content_copy",
      onClick: () => M.toast({ html: "Just double click the code you want" }),
    },
    {
      color: "green",
      closeOnClick: true,
      icon: "arrow_upward",
      onClick: () => {
        const newConfig = {...Config}
        newConfig.CodeConfig.CodeStyles.fontSize += 0.1
        setConfig(newConfig)
      }
    },
    {
      color: "red",
      closeOnClick: true,
      icon: "arrow_downward",
      onClick: () => {
        const newConfig = {...Config}
        newConfig.CodeConfig.CodeStyles.fontSize -= 0.1
        setConfig(newConfig)
      }
    },
  ]


  if (!Component || !Config) return <Loading />
  if (!componentDidReallyMount) mount(true)

  return (
    <Fragment>
      <div className="center blue-grey-text text-darken-3">
        <h4>{props.AlgorithmData.name}</h4>
      </div>

      <br />

      <div className={"container " + Styles.Text}>
        <ConfigContext.Provider value={Config.CodeConfig}>
          <Component filesData={code} />
        </ConfigContext.Provider>
      </div>

      <FAB FABElements={FABToDo} />      
    </Fragment>
  )
}

/**
 * This is a wrapper that helps to render the AlgorithmVisualizer.
 *
 * @param AlgorithmData The data of the algorithm data
 * @param TopicLink The Topic.Link :v
 */
class _AlgorithmVisualizer extends React.Component<VisualizerProps, VisualizerState> {
  constructor(props: VisualizerProps) {
    super(props)
    this.state = { isLatexReady: false }
  }

  /**
   * Load the module
   */
  componentDidMount() {
    this.props.AlgorithmData.module()
      .then(module => module.default)
      .then(moduleData => this.setState(moduleData))
  }

  /**
   * This:
   * - Typeset LaTeX
   * - call getCodeText
   * - init the modal
   */
  componentDidUpdate() {
    if (!this.state.isLatexReady) {
      this.setState({ isLatexReady: true }, () => window["MathJax"].Hub.Typeset())
    } else if (!this.state.FilesDataResult && this.state.Config) {
      const baseLink = `${linkToServer}/Code/${this.props.TopicLink}`
      const filesData = this.state.Config!.filesData
      getCodeText(baseLink, filesData, code => this.setState(code))
    } else if (!this.state.Modal) {
      const modalNode = document.querySelector(".modal")
      this.setState({ Modal: M.Modal.init(modalNode!, {}) })
    }
  }

  render() {
    const FABToDo: FABElement[] = [
      {
        color: "teal",
        closeOnClick: true,
        icon: "palette",
        onClick: () => this.state.Modal!.open(),
      },
      {
        color: "indigo",
        closeOnClick: false,
        icon: "code",
        onClick: () => {
          M.Toast.dismissAll()
          M.toast({ html: "Toggle comments" })

          document.querySelectorAll(".hljs-comment").forEach((comment: any) => {
            if (comment.style.display === "") comment.style.display = "initial"
            comment.style.display = comment.style.display == "initial" ? "none" : "initial"
          })
        },
      },
      {
        color: "blue",
        closeOnClick: true,
        icon: "content_copy",
        onClick: () => M.toast({ html: "Just double click the code you want" }),
      },
      {
        color: "green",
        closeOnClick: true,
        icon: "arrow_upward",
        onClick: () =>
          this.setState(preState => {
            const newConfig = preState.Config
            if (!newConfig) return null

            newConfig.CodeConfig.CodeStyles.fontSize =
              newConfig.CodeConfig.CodeStyles.fontSize + 0.1
            return { Config: newConfig }
          }),
      },
      {
        color: "red",
        closeOnClick: true,
        icon: "arrow_downward",
        onClick: () =>
          this.setState(preState => {
            const newConfig = preState.Config
            if (!newConfig) return null

            newConfig.CodeConfig.CodeStyles.fontSize =
              newConfig.CodeConfig.CodeStyles.fontSize - 0.1
            return { Config: newConfig }
          }),
      },
    ]

    if (!this.state.Component || !this.state.Config) return <Loading />

    return (
      <React.Fragment>
        <div className="center blue-grey-text text-darken-3">
          <h4>{this.props.AlgorithmData.name}</h4>
        </div>
        <br />

        <div className={"container " + Styles.Text}>
          <ConfigContext.Provider value={this.state.Config!.CodeConfig}>
            <this.state.Component filesData={this.state.FilesDataResult} />
          </ConfigContext.Provider>
        </div>
        <br />
        <br />
        <br />

        <ConfigurationMenu
          setState={(newState, fn) => this.setState(newState, fn)}
          Config={this.state.Config!}
        />

        <FAB FABElements={FABToDo} />
      </React.Fragment>
    )
  }
}

export default AlgorithmVisualizer2
