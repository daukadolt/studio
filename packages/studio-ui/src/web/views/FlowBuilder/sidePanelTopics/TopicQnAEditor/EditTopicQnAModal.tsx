import { Dialog, lang } from 'botpress/shared'
import React, { FC } from 'react'

import withLanguage from '~/components/Util/withLanguage'
import QNA from '../../../Qna'

interface Props {
  selectedTopic: string
  contentLang: string
  languages: string[]
  defaultLanguage: string
  isOpen: boolean
  toggle: () => void
}

const EditTopicQnAModal: FC<Props> = props => (
  <Dialog.Wrapper
    title={lang.tr('studio.flow.editQna')}
    icon="edit"
    isOpen={props.isOpen}
    onClose={props.toggle}
    style={{ width: 1000, minHeight: 550 }}
  >
    <Dialog.Body className="qna-dialog">
      <QNA
        isLite={true}
        topicName={props.selectedTopic}
        languages={props.languages}
        defaultLanguage={props.defaultLanguage}
      />
    </Dialog.Body>
  </Dialog.Wrapper>
)

export default withLanguage(EditTopicQnAModal)
