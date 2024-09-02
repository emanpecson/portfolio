import { CompletionStatus, EducationType } from '@/types/v2/EducationType';

export const education: EducationType[] = [
  {
    school: 'Amazon Web Services',
    document: 'Cloud Practitioner Certificate',
    iconSrc: '/logo/aws.png',
    timeline: 'September 2024 - December 2024',
    website:
      'https://aws.amazon.com/certification/certified-cloud-practitioner/?gclid=CjwKCAjwodC2BhAHEiwAE67hJArg3Dr33OaBAdcZt0Oak70Dgq4C3E2VCL6qcoZw_pVGjYl6DbRM2hoCZ-8QAvD_BwE&trk=1d3789b7-cdfb-4b92-a125-75424f21eaaf&sc_channel=ps&ef_id=CjwKCAjwodC2BhAHEiwAE67hJArg3Dr33OaBAdcZt0Oak70Dgq4C3E2VCL6qcoZw_pVGjYl6DbRM2hoCZ-8QAvD_BwE:G:s&s_kwcid=AL!4422!3!508672713544!e!!g!!aws%20cloud%20practitioner%20certification!11120345480!106933363382',
    status: CompletionStatus.IN_PROGRESS,
  },
  {
    school: 'University of Nevada, Las Vegas',
    document: "Bachelor's Degree of Science in Computer Science",
    iconSrc: '/logo/unlv.png',
    timeline: 'August 2020 - December 2024',
    website: 'https://www.unlv.edu/degree/bs-computer-science',
    status: CompletionStatus.IN_PROGRESS,
  },
];
