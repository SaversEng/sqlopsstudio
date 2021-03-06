/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { mixin, clone } from 'vs/base/common/objects';
import { IJSONSchema } from 'vs/base/common/jsonSchema';
import { registerInsight } from 'sql/platform/dashboard/common/insightRegistry';
import { chartInsightSchema } from 'sql/parts/dashboard/widgets/insights/views/charts/chartInsight.contribution';

import BarChart from './barChart.component';

const properties: IJSONSchema = {

};

const barSchema = mixin(clone(chartInsightSchema), properties) as IJSONSchema;

registerInsight('bar', '', barSchema, BarChart);
