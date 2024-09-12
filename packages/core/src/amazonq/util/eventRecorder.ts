/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { MetricName } from '../../shared/telemetry/telemetry.gen'
import { RecordMap } from '../../shared/utilities/map'

type Event =
    | 'chatMessageSent' // initial on chat prompt event in the ui
    | 'editorReceivedMessage' // message gets from the chat prompt to VSCode
    | 'featureReceivedMessage' // message gets redirected from VSCode -> Partner team features implementation
    | MetricName // any telemetry event emitted between when the partner teams code gets the original message to when its sent to the UI
    | 'messageDisplayed' // message gets received in the UI

/**
 * For a given traceID, map an event to a time
 */
export const uiEventRecorder = new RecordMap<{
    trigger: string
    events: Partial<Record<Event, number>>
}>()
