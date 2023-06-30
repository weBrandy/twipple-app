import { NextApiRequest, NextApiResponse } from 'next';

export default async function generateTweetsHandler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Fetch the user input from the request body
    const { contentPillars, characterOfContent, targetAudience, sentiment, 
length, complexity } = req.body
